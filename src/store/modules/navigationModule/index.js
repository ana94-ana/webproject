import HomeIcon from '../../../components/icon/sidebarIcons/HomeIcon.vue'
import SortsIcon from '../../../components/icon/sidebarIcons/SortsIcon.vue'
import SubscriptionsIcon from '../../../components/icon/sidebarIcons/SubscriptionsIcon.vue'
import LibraryIcon from '../../../components/icon/sidebarIcons/LibraryIcon.vue'
import HistoryIcon from '../../../components/icon/sidebarIcons/HistoryIcon.vue'
import YourVideosIcon from '../../../components/icon/sidebarIcons/YourVideosIcon.vue'
import SeeLaterIcons from '../../../components/icon/sidebarIcons/SeeLaterIcons.vue'
import LikedVideosIcon from '../../../components/icon/sidebarIcons/LikedVideosIcon.vue'
import VoisesShortsIcon from '../../../components/icon/sidebarIcons/VoisesShortsIcon.vue'
import PopularOnesIcon from '../../../components/icon/sidebarDiscoveryIcon/PopularOnesIcon.vue'
import MusicIcon from '../../../components/icon/sidebarDiscoveryIcon/MusicIcon.vue'
import VideoGamesIcon from '../../../components/icon/sidebarDiscoveryIcon/VideoGamesIcon.vue'
import SportsIcon from '../../../components/icon/sidebarDiscoveryIcon/SportsIcon.vue'

const navigationModule = {
    namespaced: true,
    state() {
        return {
            sidebar: [
                {
                    title: 'მთავარი',
                    to: 'Home',
                    icon: HomeIcon
                },
                {
                    title: 'sorts',
                    to: 'Sorts',
                    icon: SortsIcon
                },
                {
                    title: 'გამოწერები',
                    to: 'Subscriptions',
                    icon: SubscriptionsIcon
                },
                {
                    title: 'ბიბლიოთეკა',
                    to: 'Library',
                    icon: LibraryIcon
                },
                {
                    title: 'ისტორია',
                    to: 'History',
                    icon: HistoryIcon
                },
                {
                    title: 'თქვენი ვიდეოები',
                    to: 'YourVideos',
                    icon: YourVideosIcon
                },
                {
                    title: 'მოგვიანებით სანახავი',
                    to: 'SeeLater',
                    icon: SeeLaterIcons
                },
                {
                    title: 'მოწონებული ვიდეოები',
                    to: 'LikedVideos',
                    icon: LikedVideosIcon
                },
                {
                    title: 'ხმები Shorts-იდან',
                    to: 'VoisesShorts',
                    icon: VoisesShortsIcon
                },
                {
                    title: 'პოპულარულები',
                    to: 'PopularOnes',
                    icon: PopularOnesIcon
                },
                {
                    title: 'მუსიკა',
                    to: 'Music',
                    icon: MusicIcon
                },
                {
                    title: 'ვიდეო თამაში',
                    to: 'VideoGames',
                    icon: VideoGamesIcon
                },
                {
                    title: 'სპორტი',
                    to: 'Sports',
                    icon: SportsIcon
                },
            ]
        }
    },
    getters: {
        getSidebarMenu(state) {
            return state.sidebar
        },
    }

}

export default navigationModule