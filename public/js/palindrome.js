const main = () => {
    // #main //
    /*****/ const __word$ = document.querySelector('#word')
    /*****/ const __word$value = __word$.value
    /*****/ const __word$length = __word$value.length 
    /*****/ const __ansTxt$ = document.querySelector('#ans')

    // #submain //
    /*****/ let _num_ = parseInt(__word$length / 2)
    /*****/ const _rem_ = parseInt(__word$length % 2)
    /*****/ let l = _num_
    /*****/ let r
    /*****/ let tf = undefined;
    if (_rem_ === 0) {
        l -= 1
        r = l + 1
    } else if (_rem_ > 0) {
        //_num_ += 1
        l = _num_
        r = _num_
    }
    
    console.log(_num_, l, r,__ansTxt$)

    // #code //

    __ansTxt$.innerHTML = 'Loading...'

    console.log(`word_value = ${__word$value}`)

    while (l >= 0 && r <= __word$length) {
        if (__word$length === 0) {
            __ansTxt$.innerHTML = 'INPUT IS EMPTY!!!'
        } else {
            if (__word$value[l] === __word$value[r]) {
                l -= 1
                r += 1
                tf = true
            } else {
                tf = false;
                break;
            }
        }

        continue;
    }

    if (tf) {
        __ansTxt$.innerHTML = 'The word is a palindromic word'
    } else {
        __ansTxt$.innerHTML = 'The word is not a palindromic word'
    }

    /**********************************/
    __word$.focus()
    __word$.value = ''
}