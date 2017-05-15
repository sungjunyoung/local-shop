import {Meteor} from 'meteor/meteor';

import {Shops} from '../imports/collections/shops'

Meteor.startup(() => {

    if (typeof Shops.findOne() === 'undefined') {
        Shops.batchInsert([
            {
                location: 'seoul', title: 'ALL THAT ZAZZ', subTitle: '파트타임 재즈 밴드 모십니다.',
                address: '서울특별시 용산구 이태원동 112-4 3F', hp: '02-795-5701',
                url: '/resources/seoul/1-ls.jpg', likes: 0
            },
            {
                location: 'seoul', title: 'ART OF BEER 2호점', subTitle: '수제맥주 패키지 디자이너 찾습니다.',
                address: '서울광역시 강남구 압구정동 로데오거리 예정', hp: '-',
                url: '/resources/seoul/2-ls.jpg', likes: 0
            },
            {
                location: 'seoul', title: 'ART OF BEER 2호점', subTitle: '홍보용 팝 포스터 제작',
                address: '서울광역시 강남구 압구정동 로데오거리 예정', hp: '-',
                url: '/resources/seoul/3-ls.jpg', likes: 0
            },
            {
                location: 'seoul', title: 'CAFE YOGI', subTitle: '여러분의 사진을 담아주세요',
                address: '서울광역시 용산구 이태원동 557', hp: '02-792-3476',
                url: '/resources/seoul/4-ls.jpg', likes: 0
            },
            {
                location: 'seoul', title: 'IDAHO', subTitle: '파티와 공연을 좋아하는 아티스트는 주목해주세요',
                address: '서울특별시 마포구 동교로 39 2층', hp: '070-8871-0412',
                url: '/resources/seoul/5-ls.jpg', likes: 0
            },
            {
                location: 'seoul', title: '별달밤', subTitle: '조그맣게 여러분의 글을 전시하고 싶어요',
                address: '서울광역시 종로구 성균관로 38 1층', hp: '010-5094-2700',
                url: '/resources/seoul/6-ls.jpg', likes: 0
            },
            {
                location: 'seoul', title: '책바', subTitle: '액자에 담길 운문 작가 모집',
                address: '서울광역시 서대문구 연희맛로 24 1층 101호', hp: '02-6449-5858',
                url: '/resources/seoul/7-ls.jpg', likes: 0
            },
            {
                location: 'daegu', title: '1992 STEAK&PUB', subTitle: '마케팅이 필요한 카피라이터 모집',
                address: '대구광역시 북구 대학로 23길 27', hp: '053-939-5569',
                url: '/resources/daegu/1-ls.jpg', likes: 0
            },
            {
                location: 'daegu', title: 'ACOUSTIC PUB DELIGHT', subTitle: '인디 뮤지션 모집',
                address: '대구광역시 중구 동성로 2길 50-18 지하 1층', hp: '-',
                url: '/resources/daegu/2-ls.jpg', likes: 0
            },
            {
                location: 'daegu', title: 'TEO CAFE BITE', subTitle: '마케팅이 필요한 카피라이터 모집',
                address: '대구광역시 수성구 청호로 477', hp: '070-8819-0911',
                url: '/resources/daegu/3-ls.jpg', likes: 0
            },
            {
                location: 'daegu', title: '버드', subTitle: '신나는 락밴드 공연 모집',
                address: '대구광역시 중구 달구벌대로 2131-2', hp: '010-8635-8242',
                url: '/resources/daegu/4-ls.jpg', likes: 0
            },
            {
                location: 'daegu', title: '블루스팟', subTitle: '대중음악이 아닌 여러분의 음악을 들려주세요',
                address: '대구광역시 동구 첨단로 30 이노빌딩', hp: '053-961-3393',
                url: '/resources/daegu/5-ls.jpg', likes: 0
            },
            {
                location: 'daegu', title: '플라방', subTitle: '통통 튀는 분위기에 맞는 일러스트',
                address: '대구광역시 중구 동성로 71-13 3층', hp: '010-9677-3342',
                url: '/resources/daegu/6-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'CAFE MIMA', subTitle: '플리마켓 공간 제공합니다.',
                address: '부산광역시 남구 수영로 334번길 47-2 선빌', hp: '051-612-9779',
                url: '/resources/busan/1-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'CAFE WITH', subTitle: '커피 사진 공모전 개최',
                address: '부산광역시 남구 용소로 19번길 15', hp: '051-626-4582',
                url: '/resources/busan/2-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'CODE #01', subTitle: '인테리어용 일러스트작품 모집',
                address: '부산광역시 부산진구 중앙대로 722-9', hp: '070-7793-5579',
                url: '/resources/busan/3-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'DONGGAS KITCHEN', subTitle: '간판 디자인',
                address: '부산광역시 남구 용소로19번길 41', hp: '051-625-0609',
                url: '/resources/busan/4-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'F1963', subTitle: '\'부산 신진 디자이너전\' 디자이너 30분 모집',
                address: '부산광역시 수영구 구락로 123번길 20', hp: '051-756-1963',
                url: '/resources/busan/5-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'MACS KENNEL', subTitle: '포토그래퍼 네트워킹 파티에 초대합니다.',
                address: '부산광역시 수영구 남천바다로 43-6', hp: '-',
                url: '/resources/busan/6-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'MONK', subTitle: '공연 대관이 필요한 뮤지션 모집',
                address: '부산광역시 남구 대연3동 58-34 태양빌딩 지하', hp: '051-622-2212',
                url: '/resources/busan/7-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'PINK55', subTitle: '로고 리디자인',
                address: '부산광역시 남구 용소로21번길 37-1', hp: '070-4195-6228',
                url: '/resources/busan/8-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: 'PORT 1902', subTitle: '저희 공간의 배경음악을 맡아주실 뮤지션을 기다립니다.',
                address: '부산광역시 해운대구 송정구 덕포길 170-5', hp: '1899-6837',
                url: '/resources/busan/9-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '갤러리 디자인펍 US', subTitle: '사진전 대관',
                address: '부산광역시 부산진구 서전로10번길 23-1', hp: '-',
                url: '/resources/busan/10-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '고릴라브루잉', subTitle: '공연 대관이 필요한 뮤지션 모집',
                address: '부산광역시 수영구 광안동 174-5', hp: '051-714-6258',
                url: '/resources/busan/11-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '공중정원', subTitle: '공연가능 뮤지션 모집!',
                address: '부산광역시 부산진구 부전동 254-5', hp: '051-802-8517',
                url: '/resources/busan/12-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '보일러룸', subTitle: '공연 사진 찍어주실 포토그래퍼 모집',
                address: '부산광역 부산진구 동천로85번길 14 열기', hp: '-',
                url: '/resources/busan/13-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '마들렌책방', subTitle: '입점 작가 모집',
                address: '부산광역시 금정구 장전로20번길 22 1층 마들렌책방', hp: '051-582-7741',
                url: '/resources/busan/14-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '브라운핸즈', subTitle: '사진전 여실 작가분들, 대관 가능합니다.',
                address: '부산광역시 중구 중구로 28 국제시장 B동 2층', hp: '051-255-0332',
                url: '/resources/busan/15-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '샵메이커즈', subTitle: '여러분의 책을 모시고 싶어요',
                address: '부산광역시 금정구 부산대학로64번길 120 1F', hp: '051-512-9906',
                url: '/resources/busan/16-ls.jpg', likes: 0
            },
            {
                location: 'busan', title: '생활커피', subTitle: '굿즈 만들어 주실 아티스트 구합니다.',
                address: '부산광역시 남구 수영로334번길 56 1층 101호', hp: '051-612-8054',
                url: '/resources/busan/17-ls.jpg', likes: 0
            },
        ])
    }

    Meteor.publish('findAllShops', function(){
        return Shops.find({});
    });

    Meteor.methods({
        'incLikes': function(id){
            Shops.update(
                {_id: id},
                {
                    $inc: {
                        likes: 1
                    }
                })
        },
        'decLikes': function(id){
            Shops.update(
                {_id: id},
                {
                    $inc: {
                        likes: -1
                    }
                })
        }
    })
});
