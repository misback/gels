export default class GlobUtils {
    isDev() {
        return global.NODE_ENV !== 'prod'
    }
}