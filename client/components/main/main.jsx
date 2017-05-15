/**
 * Created by junyoung on 2017. 5. 14..
 */

import React, {Component} from 'react';
import {WindowResizeListener} from 'react-window-resize-listener';
import {createContainer} from 'meteor/react-meteor-data';
import {Shops} from '../../../imports/collections/shops';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {
    render() {
        return (
            <div style={{
                zIndex: 999,
                position: 'fixed',
                top: 0,
                width: '100%',
                height: 80,
                backgroundColor: 'white',
                opacity: 0.90,
                padding: '20px 5% 20px 5%'
            }}>
                <img src="/resources/logo-apt.png" width="100"/>
                <div style={{float: 'right'}}>
                    <i onClick={this.props.onMenu} style={{fontSize: 40}} className="material-icons">menu</i>
                </div>
            </div>)
    }
}

class MenuModal extends Component {
    render() {
        return (
            <div style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: 999
            }}>

                <i style={{
                    color: 'white', fontSize: 40,
                    position: 'fixed',
                    right: '5%',
                    top: 20,
                    cursor: 'pointer'
                }}
                   onClick={this.props.onQuit}
                   className="material-icons">clear</i>


                <div style={{
                    position: 'absolute',
                    width: 400,
                    height: 300,
                    left: '50%',
                    top: '50%',
                    marginLeft: -200,
                    marginTop: -140,
                    // backgroundColor: 'red',
                    textAlign: 'center'
                }}>
                    <div className="hoverMenu">MY STUDIO</div>
                    <div className="hoverMenu">F5 CO-WORK</div>
                    <div className="hoverMenu">F4 PROJECT</div>
                    <div className="hoverMenu">F3 NEWSFEED</div>
                    <div className="hoverMenu">F2 EXPLORE</div>
                    <div className="hoverMenu">F1 LOBBY (MAIN)</div>
                    <div className="hoverMenu">B1 #APT</div>
                </div>
            </div>)
    }
}

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: $(window).width(),
            height: $(window).height(),
            likeIcon: 'favorite_border',
        }
    }

    clickLike() {
        if (this.state.likeIcon === 'favorite') {
            Meteor.call('decLikes', this.props.id, function (err, res) {
                this.setState({likeIcon: 'favorite_border'})
            }.bind(this))
        } else {
            Meteor.call('incLikes', this.props.id, function (err, res) {
                this.setState({likeIcon: 'favorite'})
            }.bind(this))
        }
    }

    render() {
        var cardWidth = 300;
        if (this.state.width <= 600) {
            cardWidth = this.state.width * 0.9;
        } else if (this.state.width > 600 && this.state.width <= 1200) {
            cardWidth = this.state.width * 0.44;
        } else {
            cardWidth = this.state.width * 0.29;
        }

        return (
            <div style={{
                margin: '10px 10px 10px 0',
                width: cardWidth,
                display: 'inline-block',
                border: '1px solid #eeeeee',
                borderRadius: 5
            }}>
                <WindowResizeListener onResize={windowSize => {
                    this.setState({height: windowSize.windowHeight, width: windowSize.windowWidth});
                }}/>

                <img className="image" style={{
                    borderRadius: '5px 5px 0 0',
                    borderBottom: '1px solid #eeeeee'
                }}
                     src={this.props.url}
                     width={cardWidth - 2}/>

                <div style={{
                    padding: 10
                }}>
                    <div style={{
                        fontFamily: 'KoPub Batang',
                        color: '#333333',
                        fontSize: 19,
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }}>{this.props.title}</div>
                    <div style={{
                        fontFamily: 'KoPub Batang',
                        color: '#333333',
                        fontSize: 15,
                        marginBottom: 10,
                        textAlign: 'left'
                    }}>{this.props.subTitle}</div>
                    <div style={{color: '#999999', fontSize: 12, textAlign: 'left'}}>{this.props.hp}</div>
                    <div style={{color: '#999999', fontSize: 12, textAlign: 'left'}}>{this.props.address}</div>
                    <div style={{margin: '10px 0 0 0', height: 20}} id="likes">
                        <div style={{
                            paddingLeft: 10,
                            fontSize: 18,
                            whiteSpace: 'pre-wrap',
                            float: 'right',
                            textAlign: 'right'
                        }}>{this.props.likes}</div>
                        <div onClick={this.clickLike.bind(this)} style={{float: 'right', marginTop: 3}}>
                            <i style={{fontSize: 18}} className="material-icons">{this.state.likeIcon}</i>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

class CardGrid extends Component {

    renderCards() {
        var count = 0;
        return this.props.dataSet.map(card => {
            count++;
            return (
                <ReactCSSTransitionGroup
                    key={count}
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false} transitionLeave={false}>
                    <Card url={card.url} title={card.title} subTitle={card.subTitle}
                          hp={card.hp} address={card.address} likes={card.likes} id={card._id}/>
                </ReactCSSTransitionGroup>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        )
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'seoul',
            menuStyles: {
                seoul: {
                    textAlign: 'center'
                },
                daegu: {
                    color: '#aaaaaa'
                },
                busan: {
                    marginBottom: 10,
                    textAlign: 'center',
                    color: '#aaaaaa'
                }
            },
            hoverMenu: false
        }
    }

    clickSeoul() {
        this.state.menuStyles.seoul.color = '#000000';
        this.state.menuStyles.daegu.color = '#aaaaaa';
        this.state.menuStyles.busan.color = '#aaaaaa';
        this.setState({location: 'seoul'});
    }

    clickDaegu() {
        this.state.menuStyles.seoul.color = '#aaaaaa';
        this.state.menuStyles.daegu.color = '#000000';
        this.state.menuStyles.busan.color = '#aaaaaa';
        this.setState({location: 'daegu'});
    }

    clickBusan() {
        this.state.menuStyles.seoul.color = '#aaaaaa';
        this.state.menuStyles.daegu.color = '#aaaaaa';
        this.state.menuStyles.busan.color = '#000000';
        this.setState({location: 'busan'});
    }

    onMenu() {
        this.setState({hoverMenu: true});
    }

    onQuit() {
        this.setState({hoverMenu: false});
    }


    render() {
        var dataSet = this.props.shops.filter(function (shop) {
            if (shop.location === this.state.location) {
                return true;
            }
        }.bind(this));

        return (
            <div>
                <Header onMenu={this.onMenu.bind(this)}/>
                {this.state.hoverMenu ? <MenuModal onQuit={this.onQuit.bind(this)}/> : null}
                <div style={{
                    width: '90%',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    backgroundColor: 'white',
                    margin: '120px 5% 20px 5%'
                }}>
                    <img src="/resources/project-local-shop.png" width="200"/>
                    <div style={{marginBottom: 60}}>
                        <br/>
                        <div>-</div>
                        <br/>
                        <div id="description" style={{fontFamily: 'KoPub Batang'}}>
                            본 페이지는 시장검증을 위한 샘플 페이지로, <br/>
                            임의의
                            이미지이며<br/>
                            실제로 진행되는 프로젝트는 아님을 알려드립니다.<br/><br/>
                            흥미있는 프로젝트에 하트를 눌러 여러분의 관심을 표현해주세요!
                        </div>
                    </div>

                    <div id="menu-bar" style={{
                        width: '100%'
                    }}>
                        <div onClick={this.clickSeoul.bind(this)} className="menu" style={this.state.menuStyles.seoul}>
                            SEOUL
                        </div>
                        <div onClick={this.clickDaegu.bind(this)} className="menu" style={this.state.menuStyles.daegu}>
                            DAEGU
                        </div>
                        <div onClick={this.clickBusan.bind(this)} className="menu" style={this.state.menuStyles.busan}>
                            BUSAN
                        </div>
                    </div>

                    <div id="cardGrid" style={{
                        textAlign: 'center',
                        marginRight: -10
                    }}>
                        <CardGrid dataSet={dataSet}/>
                    </div>
                </div>
            </div>)
    }
}

export default createContainer((props) => {
    Meteor.subscribe('findAllShops');
    return {
        shops: Shops.find({}).fetch()
    }
}, Main);

