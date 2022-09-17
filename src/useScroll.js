
const useScroll = () => {

    const to = (ref) => {
        if(ref && ref.current)
            window.innerWidth < 900
              ? ref.current.scrollIntoView()
              : ref.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
    }

    const getElementPos = (ref) => {
        if(ref && ref.current)
            return ref.current.getBoundingClientRect().top + window.scrollY;
    }

    const getElementHeight = (ref) => {
        if(ref && ref.current)
            return ref.current.offsetHeight
    }

    const getScrollPos = () => {
        return document.documentElement.scrollTop;
    }

    return {to, getElementPos, getElementHeight, getScrollPos};
}
 
export default useScroll;