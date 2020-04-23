import './assets/css/style.css'
// import Message from './Message'

export default {
  mounted() {
    const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (!isMobile && !SHOW_IN_MOBILE) {
      this.updateCopy()
    }
  },

  updated() {
    const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (!isMobile && !SHOW_IN_MOBILE) {
      this.updateCopy()
    }
  },

  methods: {
    updateCopy() {
      setTimeout(() => {
        if (typeof COPY_SELECTOR === 'string') {
          document.querySelectorAll(COPY_SELECTOR).forEach(this.generateCopyButton)
        } else if (COPY_SELECTOR instanceof Array || Array.isArray(COPY_SELECTOR)) {
          COPY_SELECTOR.forEach(item => {
            document.querySelectorAll(item).forEach(this.generateCopyButton)
          })
        }
      }, 1000)
    },
    generateCopyButton(parent) {
      if (parent.classList.contains('codecopy-enabled')) return
      const copyElement = document.createElement('i')
      copyElement.className = 'code-copy'
      copyElement.innerHTML = '<div class="copy-button">'+COPY_NAME+'</div>'
      copyElement.title = COPY_TITLE
      copyElement.addEventListener('click', () => {
        this.copyToClipboard(parent.getElementsByTagName("code")[0].innerText,copyElement)
      })
      parent.appendChild(copyElement)
      parent.classList.add('codecopy-enabled')
    },
    copyToClipboard(str,element) {
      const el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected =
        document.getSelection().rangeCount > 0 ?
        document.getSelection().getRangeAt(0) :
        false
      el.select()
      document.execCommand('copy')
      element.innerHTML = '<div class="copy-button">'+COPY_MESSAGE+'</div>'
      setTimeout(function(){element.innerHTML = '<div class="copy-button">'+COPY_NAME+'</div>'},DURATION)
      // const message = new Message()
      // message.show({
      //   text: COPY_MESSAGE,
      //   duration: DURATION
      // })
      document.body.removeChild(el)
      if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
      }
    }
  }
}
