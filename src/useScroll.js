
const useScroll = () => {

    const to = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    const getElementPos = (ref) => {
        return ref.current.getBoundingClientRect().top + window.scrollY;
    }

    const getElementHeight = (ref) => {
        return ref.current.offsetHeight
    }

    const getScrollPos = () => {
        return document.documentElement.scrollTop;
    }

    return {to, getElementPos, getElementHeight, getScrollPos};
}
 
export default useScroll;