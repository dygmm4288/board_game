from typing import List
from schema.minibill import Establishment, LandMark

establishments = [
    Establishment(
        id=0,
        name='초밥집',
        description='방금 주사위를 굴린 플레이어로부터 동전 3개를 가져옵니다.',
        cost=2,
        earn=3,
        rolls=[1],
        color='Red',
        est_type='Cup',
        initial=5
    ),
    Establishment(
        id=1,
        name='밀밭',
        description='은행으로부터 동전 1개를 받습니다.',
        cost=1,
        earn=1,
        rolls=[1, 2],
        color='Blue',
        est_type='Wheat',
        initial=5
    ),
    Establishment(
        id=2,
        name='포도밭',
        description='은행으로부터 동전 2개를 받습니다.',
        cost=1,
        earn=2,
        rolls=[2],
        color='Blue',
        est_type='Fruit',
        initial=5
    ),
    Establishment(
        id=3,
        name='빵집',
        description='은행으로부터 동전 2개를 받습니다.',
        cost=1,
        earn=2,
        rolls=[2, 3],
        color='Green',
        est_type='Shop',
        initial=5
    ),
    Establishment(
        id=4,
        name='카페',
        description='방금 주사위를 굴린 플레이어로부터 동전 2개를 가져옵니다.',
        cost=1,
        earn=2,
        rolls=[3],
        color='Red',
        est_type='Cup',
        initial=5
    ),
    Establishment(
        id=5,
        name='꽃밭',
        description='은행으로부터 동전 2개를 받습니다.',
        cost=2,
        earn=2,
        rolls=[4],
        color='Blue',
        est_type=None,
        initial=5
    ),
    Establishment(
        id=6,
        name='편의점',
        description='은행으로부터 동전 3개를 받습니다.',
        cost=1,
        earn=3,
        rolls=[4],
        color='Green',
        est_type='Shop',
        initial=5
    ),
    Establishment(
        id=7,
        name='숲',
        description='은행으로부터 동전 2개를 받습니다.',
        cost=3,
        earn=2,
        rolls=[5],
        color='Blue',
        est_type='Gear',
        initial=5
    ),
    Establishment(
        id=8,
        name='꽃집',
        description='자신이 소유한 "꽃밭" 건물 개수마다 은행으로부터 동전 3개를 받습니다.',
        cost=1,
        earn=3,
        rolls=[6],
        color='Green',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=9,
        name='비즈니스 센터',
        description='상대방과 건물을 교환할 수 있습니다.',
        cost=3,
        earn=0,
        rolls=[6],
        color='Purple',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=10,
        name='옥수수밭',
        description='은행으로부터 동전 3개를 받습니다.',
        cost=2,
        earn=3,
        rolls=[7],
        color='Blue',
        est_type='Wheat',
        initial=5
    ),
    Establishment(
        id=11,
        name='경기장',
        description='각 상대방으로부터 동전 3개를 가져옵니다.',
        cost=3,
        earn=3,
        rolls=[7],
        color='Purple',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=12,
        name='햄버거 가게',
        description='방금 주사위를 굴린 플레이어로부터 동전 2개를 가져옵니다.',
        cost=1,
        earn=2,
        rolls=[8],
        color='Red',
        est_type='Cup',
        initial=5
    ),
    Establishment(
        id=13,
        name='가구 공장',
        description='자신이 소유한 Gear 건물 개수마다 은행으로부터 동전 4개를 받습니다.',
        cost=4,
        earn=4,
        rolls=[8],
        color='Green',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=14,
        name='쇼핑 거리',
        description='동전이 10개 이상인 각 상대방으로부터 절반을 가져옵니다 (내림).',
        cost=3,
        earn=0,
        rolls=[8, 9],
        color='Purple',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=15,
        name='패밀리 레스토랑',
        description='방금 주사위를 굴린 플레이어로부터 동전 2개를 가져옵니다.',
        cost=2,
        earn=2,
        rolls=[9, 10],
        color='Red',
        est_type='Cup',
        initial=5
    ),
    Establishment(
        id=16,
        name='와인공장',
        description='자신이 소유한 Fruit 건물 개수마다 은행으로부터 동전 3개를 받습니다.',
        cost=3,
        earn=3,
        rolls=[9],
        color='Green',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=17,
        name='사과 과수원',
        description='은행으로부터 동전 3개를 받습니다.',
        cost=1,
        earn=3,
        rolls=[10],
        color='Blue',
        est_type='Fruit',
        initial=5
    ),
    Establishment(
        id=18,
        name='식품 창고',
        description='자신이 소유한 Cup 건물 개수마다 은행으로부터 동전 2개를 받습니다.',
        cost=2,
        earn=2,
        rolls=[10, 11],
        color='Green',
        est_type=None,
        initial=3
    ),
    Establishment(
        id=19,
        name='광산',
        description='은행으로부터 동전 6개를 받습니다.',
        cost=4,
        earn=6,
        rolls=[11, 12],
        color='Blue',
        est_type='Gear',
        initial=5
    )
]

landmarks = [
    LandMark(
        id=0,
        name='시청',
        description='설립물을 구매하기 전에 동전이 0개일 경우, 은행에서 동전 1개를 받습니다.',
        coins=1,
        cost=[0]
    ),
    LandMark(
        id=1,
        name='대출 사무소',
        description='이 랜드마크는 랜드마크가 없는 유일한 플레이어일 때만 건설할 수 있습니다. 모든 랜드마크의 건설 비용을 2 동전 줄입니다 (건설자만).',
        coins=2,
        cost=[10]
    ),
    LandMark(
        id=2,
        name='농민 시장',
        description='귀하의 Wheat 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).',
        coins=1,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=3,
        name='프랑스 레스토랑',
        description='각 상대방에게서 동전 2개를 가져옵니다 (건설자만).',
        coins=2,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=4,
        name='이사 회사',
        description='주사위를 두 번 굴리면, 이전 플레이어에게 1개의 설립물을 제공합니다 (모든 플레이어).',
        coins=None,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=5,
        name='천문대',
        description='"발사대"의 건설 비용을 5 동전 줄입니다 (모든 플레이어).',
        coins=5,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=6,
        name='출판사',
        description='각 상대방이 가진 Shop 건물 수만큼, 각 상대방에게서 동전 1개를 가져옵니다 (건설자만).',
        coins=1,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=7,
        name='쇼핑몰',
        description='귀하의 Shop 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).',
        coins=1,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=8,
        name='테크 스타트업',
        description='주사위를 12로 굴리면 은행에서 동전 8개를 받습니다 (모든 플레이어).',
        coins=8,
        cost=[10, 14, 22]
    ),
    LandMark(
        id=9,
        name='공항',
        description='턴에 아무것도 건설하지 않으면 은행에서 동전 5개를 받습니다 (모든 플레이어).',
        coins=5,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=10,
        name='놀이공원',
        description='주사위를 두 번 굴리면 이 턴 후에 추가로 턴을 얻습니다 (모든 플레이어).',
        coins=None,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=11,
        name='차터하우스',
        description='주사위를 두 번 굴려 동전이 0개이면, 은행에서 동전 3개를 받습니다 (모든 플레이어).',
        coins=3,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=12,
        name='전시홀',
        description='동전이 10개 이상인 각 상대방에게서 절반을 가져옵니다 (건설자만).',
        coins=0,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=13,
        name='대장간',
        description='귀하의 Gear 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).',
        coins=1,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=14,
        name='박물관',
        description='각 상대방이 건설한 랜드마크 수에 따라 동전 3개를 가져옵니다 (건설자만).',
        coins=3,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=15,
        name='공원',
        description="모든 플레이어의 동전을 가능한 한 고르게 분배하고, 차액은 은행에서 보충합니다.",
        coins=None,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=16,
        name='라디오 타워',
        description='이 턴 후에 추가 턴을 얻습니다 (건설자만).',
        coins=None,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=17,
        name='소다 병입 공장',
        description='귀하의 Cup 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).',
        coins=1,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=18,
        name='사원',
        description='주사위를 두 번 굴리면, 각 상대방에게서 동전 2개를 가져옵니다 (모든 플레이어).',
        coins=2,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=19,
        name='TV 방송국',
        description='각 상대방이 가진 Cup 건물 수만큼, 각 상대방에게서 동전 1개를 가져옵니다 (건설자만).',
        coins=1,
        cost=[12, 16, 22]
    ),
    LandMark(
        id=20,
        name='발사대',
        description='게임에서 승리합니다!',
        coins=None,
        cost=[45, 38, 25]
    )
]
