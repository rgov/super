import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as FontAwesomeIconNative } from '@fortawesome/react-native-fontawesome'
import { FontAwesomeIcon as FontAwesomeIconReact } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands
} from '@fortawesome/fontawesome-svg-core/import.macro'
import { Platform, StyleSheet } from 'react-native'
import { Icon as IconNb, useToken } from 'native-base'
export * from '@fortawesome/react-native-fontawesome'

const FontAwesomeIcon =
  Platform.OS === 'web' && false ? FontAwesomeIconReact : FontAwesomeIconNative

/*FaIcon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}*/

export default function Icon({ color, icon, size, style, ...props }) {
  if (Platform.OS === 'web') {
    // behave like native-base
    size = size == 'xs' ? 3 : size
    size = size ? parseInt(size) * 4 : 16
    size = `${size}px`

    style = style || {}

    if (props.mr) {
      style.marginRight = props.mr * 4
    }

    if (props.ml) {
      style.marginLeft = props.ml * 4
    }

    const webStyles = StyleSheet.flatten([
      style,
      { color: useToken('colors', color), width: size, height: size }
    ])

    /*if (typeof icon === 'string') {
      return <FontAwesomeIconReact icon={solid('coffee')} style={webStyles} />
    }*/

    return <FontAwesomeIconReact icon={icon} style={webStyles} />
  }

  return <IconNb as={FontAwesomeIcon} icon={icon} color={color} {...props} />
}

//Brand icons
const Akamai = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 65"
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <use href="#A" x=".5" y=".5" />
        <symbol id="A" overflow="visible">
          <g stroke="none" fillRule="nonzero">
            <path
              d="M47.37 46.866h-6.047l5.542-11.086zm.504 5.04l.504 4.535h7.055l-2.52-25.7H42.33l-13.102 25.7h7.055l2.016-4.535z"
              fill="#f7971d"
            />
            <path
              d="M32.252 62.488C19.149 58.457 9.575 46.362 9.575 32.252c0-14.614 9.575-26.7 23.18-30.74C34.267 1.008 33.763 0 32.252 0 14.11.504 0 14.614 0 32.252S14.11 64 32.252 64c1.512 0 1.512-1.008 0-1.512zm-16.63-23.18v-2.52c0-14.1 11.087-25.197 25.197-25.197 13.102 0 17.134 6.047 17.638 5.543S53.921 5.04 38.299 5.04c-14.1 0-25.197 11.087-25.197 25.197 0 3.024.504 6.047 1.512 9.07.504 1.512 1.008 1.512 1.008 0zm10.583-18.143c6.55-3.024 14.614-3.024 22.677 0 5.543 2.016 8.567 4.535 9.07 4.535s-3.024-6.047-9.575-8.567c-8.062-3.033-16.125-1.5-22.677 3.527-.504.504 0 1.008.504.504z"
              fill="#0095d6"
            />
          </g>
        </symbol>
      </svg>
    </IconNb>
  )
}

const AlibabaCloud = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#FF6A00" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Alibaba Cloud</title>
        <path d="M3.996 4.517h5.291L8.01 6.324 4.153 7.506a1.668 1.668 0 0 0-1.165 1.601v5.786a1.668 1.668 0 0 0 1.165 1.6l3.857 1.183 1.277 1.807H3.996A3.996 3.996 0 0 1 0 15.487V8.513a3.996 3.996 0 0 1 3.996-3.996m16.008 0h-5.291l1.277 1.807 3.857 1.182c.715.227 1.17.889 1.165 1.601v5.786a1.668 1.668 0 0 1-1.165 1.6l-3.857 1.183-1.277 1.807h5.291A3.996 3.996 0 0 0 24 15.487V8.513a3.996 3.996 0 0 0-3.996-3.996m-4.007 8.345H8.002v-1.804h7.995Z" />
      </svg>
    </IconNb>
  )
}

const AmazonAWS = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#232F3E" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Amazon AWS</title>
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
      </svg>
    </IconNb>
  )
}

const Apple = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#232F3E" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Apple</title>
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    </IconNb>
  )
}

const Automattic = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#3499CD" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Automattic</title>
        <path d="M14.521 8.11a1.497 1.497 0 01.433 2.102l-3.511 5.441a1.496 1.496 0 01-2.068.457 1.507 1.507 0 01-.44-2.08l3.513-5.44c.215-.335.554-.57.943-.655.39-.085.796-.04 1.13.175z M11.98 23.03C4.713 23.03 0 17.79 0 12.338v-.676C0 6.117 4.713.97 11.98.97 19.246.97 24 6.117 24 11.662v.676c0 5.453-4.713 10.692-12.02 10.692zm8.133-11.31c0-3.974-2.888-7.51-8.133-7.51-5.245 0-8.087 3.542-8.087 7.51v.497c0 3.974 2.888 7.578 8.087 7.578 5.198 0 8.133-3.604 8.133-7.578v-.497z" />
      </svg>
    </IconNb>
  )
}

const BattleNet = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#148EFF" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Battle.net</title>
        <path d="M20.001 3.106c0-.059 0-.187.063-.187.09 0 .167.19.196.27.486 1.548.35 3.449-.345 5.588 2.756 1.473 4.338 3.382 4.052 5.168-.38 2.347-3.824 3.727-8.462 3.565a27.12 27.12 0 001.55-1.825c1.786-.347 3.066-1.053 3.4-2.184.246-.823-.32-1.736-1.396-2.594-1.768 3.723-4.722 7.058-7.451 8.985 1.323 1.687 2.556 2.858 3.964 3.516.052.025.164.09.126.148-.044.078-.252.05-.33.034-1.585-.352-3.158-1.42-4.673-3.093-2.652 1.65-5.099 2.066-6.502.925-1.842-1.5-1.316-5.178 1.137-9.106.193.631.505 1.526.806 2.253-.594 1.721-.622 3.183.19 4.041.59.623 1.664.59 2.945.088-2.325-3.395-3.738-7.62-4.04-10.954-2.124.303-3.754.785-5.027 1.675-.048.033-.16.098-.195.04-.044-.078.082-.24.137-.304 1.098-1.196 2.812-2.028 5.012-2.496-.102-3.124.758-5.45 2.45-6.093 2.22-.846 5.14 1.448 7.316 5.542a26.617 26.617 0 00-2.354-.429c-1.193-1.372-2.446-2.13-3.594-1.854-.834.2-1.341 1.146-1.547 2.502 4.108-.332 8.473.56 11.51 1.964.8-1.984 1.197-3.637 1.062-5.185zm-9.598 15.057c3.252-1.859 5.889-4.696 7.638-7.965-3.24-1.88-7.013-2.75-10.716-2.627-.008 3.745 1.124 7.451 3.082 10.594Z" />
      </svg>
    </IconNb>
  )
}

const Cloudflare = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#F38020" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Cloudflare</title>
        <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
      </svg>
    </IconNb>
  )
}

const DigitalOcean = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#0080FF" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>DigitalOcean</title>
        <path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z" />
      </svg>
    </IconNb>
  )
}

const Edgecast = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#6001d2" {...props}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 504 117.5"
      >
        <path d="M63.5 74.3c-5.7 9.4-15.3 14.3-28.2 14.2-19.1-.1-31.2-12.4-31.1-31C4.3 39.8 18 26.6 35.4 26.7c18 .1 30.4 12.8 30.2 32 0 1.9-.1 3.4-.3 4.4L25 63c.3 5.3 4.9 8.9 10.5 9 4.2 0 7.1-1.4 9.7-4.7l18.3 7M45 50.9c-.4-4.8-4.4-8-9.8-8s-9.5 3.1-10 7.9l19.8.1zM136.8 2.9l-.5 84.6-21.3-.1v-6.3c-4.2 5.1-10.5 7.8-17.7 7.7-15.2-.1-26.8-13.5-26.7-30.9.1-17.3 11.9-30.7 27.1-30.6 7.3 0 13.6 2.7 17.6 7.9l.2-32.4 21.3.1m-33 66.8c6.6 0 12-5.2 12-11.6 0-6.4-5.3-11.7-11.9-11.8-6.4 0-11.9 5.2-11.9 11.6 0 6.5 5.3 11.8 11.8 11.8zM169 87c-15.8-.1-27.1-11.5-27-29.3.1-17.3 11.6-30.1 27.3-30 7.5 0 13.4 3.1 16.9 7.8v-6.2l21.1.1-.3 53.4c-.1 19.4-12.2 31.8-34.6 31.6-14.6-.1-24.3-4.9-29.8-14l16.7-10.6c2.7 4.7 7.6 7.2 13.5 7.2 8.3 0 13-4.5 13.1-14v-2.8c-3.4 4-9.6 6.8-16.9 6.8m6.2-40.6c-6.2 0-11.6 5-11.7 11.4 0 6.4 5.3 11.5 11.5 11.5s11.6-5 11.7-11.4c.1-6.4-5.3-11.5-11.5-11.5zM272.1 75.5c-5.7 9.4-15.3 14.3-28.2 14.2-19.1-.1-31.2-12.4-31.1-31C212.9 41 226.6 27.8 244 28c18 .1 30.4 12.8 30.2 32 0 1.9-.1 3.4-.3 4.4l-40.4-.2c.3 5.3 4.9 8.9 10.5 9 4.2 0 7.2-1.4 9.7-4.7l18.4 7m-18.5-23.4c-.4-4.8-4.4-8-9.8-8s-9.5 3.1-10 7.9l19.8.1zM310.9 28.3c4.6 0 9.6 1.1 13.7 3.1l-.1 19.4c-3.4-2.2-6.9-3.3-10.6-3.3-7.4 0-13 4.6-13.1 11.6 0 7 5.4 11.7 12.9 11.8 3.7 0 7.4-1.1 10.7-3.4l-.2 19.5c-4.6 2.3-9.6 3.2-14.1 3.2-17.6-.2-31.1-12.2-31-31.1.1-17.9 13.3-30.9 31.8-30.8M395.5 30.5l-.4 58.5-21.1-.1v-6.3c-4.5 5.1-10.6 7.8-18 7.7-15.1-.1-26.6-13.5-26.5-30.9.1-17.3 11.8-30.7 26.9-30.6 7.4 0 13.6 2.7 17.9 7.9v-6.3l21.2.1m-32.7 40.8c6.6 0 12-5.2 12-11.6 0-6.4-5.3-11.7-11.9-11.8-6.6 0-12 5.2-12 11.6 0 6.4 5.4 11.7 11.9 11.8zM426.7 90.8c-9.9-.1-19.8-2.7-26.8-7.3l7.6-15.2c5.8 3.3 13 5.7 19.5 5.7 3 0 5-.6 5-2.5 0-1.6-2-2.2-6.4-3.3l-3-.7c-13.2-3.1-19.9-8.2-19.8-18.6.1-12.3 10.4-19.8 25.5-19.7 8.3 0 16.1 2.2 24.2 6.2l-6.6 15.3c-6-3-11.7-5-17.6-5-3.2 0-4.5.8-4.5 2.4 0 1.4 1.9 1.9 6.7 3.2l3.4 1c13 3.7 19.4 8.9 19.3 18.4-.1 12.9-11 20.2-26.5 20.1M485.7 12.9l-.1 18.1 13.7.1-.1 17.2-13.7-.1-.1 15.8c0 5.7 2.5 8 7.4 8 2.2 0 4.3-.4 6.2-1.1V89c-2.5.9-7.3 2.1-13.4 2-13.5-.1-21.6-8.2-21.5-22.1l.1-20.8h-7.8l.1-17.2h7.8l.1-18.1 21.3.1" />
      </svg>
    </IconNb>
  )
}

const Facebook = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#1877F2" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Facebook</title>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </IconNb>
  )
}

const Fastly = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#FF282D" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Fastly</title>
        <path d="M13.919 3.036V1.3h.632V0H9.377v1.3h.631v1.749a10.572 10.572 0 00-8.575 10.384C1.433 19.275 6.17 24 12 24c5.842 0 10.567-4.737 10.567-10.567 0-5.186-3.729-9.486-8.648-10.397zm-1.628 15.826v-.607h-.619v.607c-2.757-.158-4.955-2.38-5.101-5.137h.607v-.62h-.607a5.436 5.436 0 015.101-5.089v.607h.62v-.607a5.435 5.435 0 015.137 5.114h-.607v.619h.607a5.444 5.444 0 01-5.138 5.113zm2.26-7.712l-.39-.389-1.979 1.725a.912.912 0 00-.316-.06c-.534 0-.971.448-.971.995 0 .547.437.996.971.996.535 0 .972-.45.972-.996a.839.839 0 00-.049-.304Z" />
      </svg>
    </IconNb>
  )
}

const Github = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#181717" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </IconNb>
  )
}

const Google = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#4285F4" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Google</title>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    </IconNb>
  )
}

const HBO = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#000000" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>HBO</title>
        <path d="M7.042 16.896H4.414v-3.754H2.708v3.754H.01L0 7.22h2.708v3.6h1.706v-3.6h2.628zm12.043.046C21.795 16.94 24 14.689 24 11.978a4.89 4.89 0 0 0-4.915-4.92c-2.707-.002-4.09 1.991-4.432 2.795.003-1.207-1.187-2.632-2.58-2.634H7.59v9.674l4.181.001c1.686 0 2.886-1.46 2.888-2.713.385.788 1.72 2.762 4.427 2.76zm-7.665-3.936c.387 0 .692.382.692.817 0 .435-.305.817-.692.817h-1.33v-1.634zm.005-3.633c.387 0 .692.382.692.817 0 .436-.305.818-.692.818h-1.33V9.373zm1.77 2.607c.305-.039.813-.387.992-.61-.063.276-.068 1.074.006 1.35-.204-.314-.688-.701-.998-.74zm3.43 0a2.462 2.462 0 1 1 4.924 0 2.462 2.462 0 0 1-4.925 0zm2.462 1.936a1.936 1.936 0 1 0 0-3.872 1.936 1.936 0 0 0 0 3.872Z" />
      </svg>
    </IconNb>
  )
}

const Hetzner = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#D50C2D" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Hetzner</title>
        <path d="M0 0v24h24V0H0zm4.602 4.025h2.244c.509 0 .716.215.716.717v5.64h8.883v-5.64c0-.509.215-.717.717-.717h2.229c.5 0 .71.23.724.717v14.516c0 .509-.215.717-.717.717h-2.23c-.51 0-.717-.215-.717-.717v-5.735H7.562v5.735c0 .516-.215.717-.716.717H4.602c-.51 0-.717-.208-.717-.717V4.742c0-.509.207-.717.717-.717z" />
      </svg>
    </IconNb>
  )
}

const Huawei = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#FF0000" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Huawei</title>
        <path d="M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 00-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 00.06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z" />
      </svg>
    </IconNb>
  )
}

const Linode = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#00A95C" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Linode</title>
        <path d="M22.006 10.684a.15.15 0 0 0-.07-.15l-3.261-1.821a.14.14 0 0 0-.14 0l-2.771 1.69a.17.17 0 0 0-.07.13v1.451l-1.13-.74a.14.14 0 0 0-.15 0l-1.62 1-.071-1.64a.19.19 0 0 0-.07-.12l-1.65-1.09 1.51-.781a.16.16 0 0 0 .08-.14l-.27-6.272a.16.16 0 0 0-.08-.13L8 0h-.1L2.08 1.81A.16.16 0 0 0 2 2l1.27 6.233a.22.22 0 0 0 0 .08l1.83 1.38-1.26.6a.16.16 0 0 0-.08.17l1 4.702a.18.18 0 0 0 0 .07L6 16.375l-.8.49a.15.15 0 0 0-.06.16l.75 3.642a.11.11 0 0 0 0 .07l3.002 3.221a.14.14 0 0 0 .2 0l3.921-3.121a.16.16 0 0 0 .06-.12l-.07-2.12 1.32 1.1a.14.14 0 0 0 .18 0l3.142-2.511a.24.24 0 0 0 .06-.11l.09-1.57 1 .67a.14.14 0 0 0 .17 0l2.571-2.001a.14.14 0 0 0 .05-.1zm-9.623.15l.07 1.57.12 2.781-4.231 2.871-.66-4.532zm-.35-8.423l.25 5.912-5.002 2.59-.9-6.321zM3.54 8.123L2.33 2.26l3.74 2.32.931 6.203-1.58-1.2zM5 15.055l-.88-4.261 3.281 2.74.6 4.382-1.68-1.62zm1.14 5.512l-.65-3.141 2.892 2.85.47 3.162zm3.002 3l-.49-3.33 4.001-2.871.14 3.28zm3.861-5.36v-1.081a.16.16 0 0 0-.05-.11l-1.13-.92 1-.7a.14.14 0 0 0 .06-.12v-.261l1.39 1.06v3.211zm4.442-1.201l-2.861 2.28v-3.22l3.07-2.201zm1.29-1.21l-.9-.631.09-1.59a.11.11 0 0 0 0-.06.1.1 0 0 0 0-.05l-1.93-1.27v-1.391l3 1.89zm2.55-1.861l-2.28 1.81.26-3.06 2.431-1.681z" />
      </svg>
    </IconNb>
  )
}

const Microsoft = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#5E5E5E" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Microsoft</title>
        <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z" />
      </svg>
    </IconNb>
  )
}

const MicrosoftAzure = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#0078D4" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Microsoft Azure</title>
        <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684" />
      </svg>
    </IconNb>
  )
}

const Netflix = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#E50914" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Netflix</title>
        <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z" />
      </svg>
    </IconNb>
  )
}

const OVH = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#123F6D" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>OVH</title>
        <path d="M19.881 10.095l2.563-4.45C23.434 7.389 24 9.404 24 11.555c0 2.88-1.017 5.523-2.71 7.594h-6.62l2.04-3.541h-2.696l3.176-5.513h2.691zm-2.32-5.243L9.333 19.14l.003.009H2.709C1.014 17.077 0 14.435 0 11.555c0-2.152.57-4.17 1.561-5.918L5.855 13.1 10.6 4.852h6.961z" />
      </svg>
    </IconNb>
  )
}

const Slack = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#4A154B" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Slack</title>
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    </IconNb>
  )
}

const StackPath = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#000000" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>StackPath</title>
        <path d="M3.721 7.34c-1.01 0-1.84.23-2.5.7-.66.46-.99 1.08-.99 1.84 0 .78.276 1.38.83 1.79.55.42 1.4.8 2.54 1.16.55.2.93.38 1.14.56.22.17.32.42.32.74 0 .28-.1.51-.32.68-.21.19-.54.27-.97.27-.57 0-1-.12-1.27-.34-.3-.24-.44-.6-.44-1.12H.014l-.013.04c-.02.97.346 1.71 1.1 2.23.75.52 1.64.77 2.67.77 1.02 0 1.84-.22 2.46-.66.62-.46.94-1.09.94-1.88 0-.79-.26-1.4-.78-1.85-.53-.45-1.3-.83-2.33-1.13-.67-.25-1.12-.45-1.37-.61-.24-.16-.36-.37-.36-.63 0-.28.12-.51.36-.69.24-.21.57-.29 1-.29.43 0 .77.12 1.01.34.25.24.37.52.37.88h2.04l.01-.03c.03-.81-.29-1.48-.93-2-.64-.52-1.46-.77-2.47-.77m4.78.06v9.18h2.15v-3.15h1.3c1.09 0 1.95-.27 2.59-.83.64-.55.96-1.28.96-2.18 0-.92-.32-1.63-.96-2.19-.64-.56-1.5-.83-2.59-.83H8.5m9.609 0l-3.18 9.19h1.99l3.26-9.19m1.75 0l-3.18 9.19h1.99L24 7.4M10.65 9.04h1.3c.46 0 .82.13 1.05.39.25.26.37.57.37 1 0 .4-.12.73-.37.98-.23.26-.59.38-1.05.38h-1.3z" />
      </svg>
    </IconNb>
  )
}

const Taobao = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#E94F20" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Taobao</title>
        <path d="M21.3099 9.9008c.5285 0 .9584.4284.9584.9589 0 .5276-.4299.958-.9584.958-.5276 0-.9585-.4304-.9585-.958 0-.5305.4309-.959.9585-.959zm2.3899 3.0462h-10.408v-.9595h4.15V9.7591h-2.8869v-.768h2.8868v-.9234h-2.508v.2034h-1.6418V5.3733h1.6418v.3497c.4945-.0607 1.463-.1814 2.5175-.2956v-.8257h1.8522v.6408c.9249-.0807 1.753-.1312 2.211-.1112 1.489.0716 2.4449.2816 2.485 1.273.0356.989-1.4244 1.9043-1.4244 1.9043l-.4509-.4338v.1929h-2.8116v.9233h3.229v.768h-3.229v2.2285h4.3873v.9595zM21.5259 7.299l-.0115-.0115s1.3722-.7595.3427-1.272c-.8633-.43-5.5346.3056-6.9234.6257v.6578h6.5922zM1.8822 6.4166c.5515 0 .9985-.449.9985-1 0-.5531-.447-.9995-.9985-.9995a.9984.9984 0 00-1.001.9995c0 .551.4463 1 1.001 1zm3.4094-.8596c.252-.4364.3717-.7195.3717-.7195l-1.466-.4123S3.6068 6.3546 2.5527 7.253c0 0 1.0195.5897 1.0095.5732a9.6444 9.6444 0 00.782-.8793c.2345-.1017.4585-.198.6794-.2876-.2715.487-.7094 1.219-1.1478 1.6809l.6178.5385s.4198-.4033.8792-.8907h.5246v.8993H3.8557v.7204h2.0416v1.7235c-.025 0-.0521 0-.0782-.002-.224-.0106-.5751-.0476-.7124-.265-.1678-.2636-.044-.7496-.0346-1.0457H3.6608l-.0496.026s-.517 2.3142 1.489 2.2621c1.8793.0521 2.9544-.523 3.4725-.9178l.2064.7645 1.1583-.4825-.785-1.9183-.941.292.1764.6574c-.2415.1809-.518.3157-.8187.4134V9.6076h1.995v-.7204h-1.995v-.8993h2.003v-.72h-3.557c.2565-.3111.4589-.5982.5095-.78L5.9058 6.32c2.6603-.9519 4.1408-.7886 4.1278.773v4.1128s.1568 1.4124-1.461 1.3107l-.8757-.188-.207.8307s3.7822 1.0812 4.0913-1.8246c.3096-2.9058-.0767-4.7576-.0767-4.7576s-.3451-2.6824-6.213-1.02zM.0582 12.1534l1.5867.9905c1.0967-2.3813 1.0265-2.0657 1.302-2.92.2832-.8737.3453-1.54-.1362-2.023-.6172-.6197-.6844-.6773-1.6017-1.3582L.5487 7.8562l1.2164.7576s.8141.4153.4274 1.1903c-.3617.7375-2.1343 2.3493-2.1343 2.3493zm19.94 6.8484s-.0186.523-.6704.523c-.5892 0-.6363-.4113-.6363-.4113-.2485.2996-.6207.4549-1.0696.4549-.7606 0-1.2961-.5135-1.2961-1.2896 0-.786.5576-1.28 1.3983-1.28.3832 0 .725.1462.9258.4037.0066-.0706.0136-.1362.0136-.1968 0-.5622-.3092-.8127-1.01-.8127-.3382 0-.6659.0486-1.0136.1408.1107-.219.1924-.3793.2971-.4574.1202-.0972.4294-.1408.9419-.1408 1.269 0 1.742.4259 1.742 1.4279v1.2024c0 .3161.033.4359.3772.4359zm-1.3272-.745c0-.4815-.2555-.747-.6378-.747-.4043 0-.6668.2825-.6668.7595 0 .467.2775.7615.6533.7615.3882 0 .6513-.275.6513-.774zm5.2706-.501c0 1.1528-.6924 1.8271-1.7786 1.8271-1.0957 0-1.7766-.6743-1.7766-1.8271 0-1.1584.6809-1.8252 1.7766-1.8252 1.0862 0 1.7786.6719 1.7786 1.8252zm-1.0867 0c0-.8693-.237-1.2997-.692-1.2997-.4734 0-.6938.4304-.6938 1.2997 0 .8662.2204 1.299.6939 1.299.467 0 .6919-.4328.6919-1.299zm-7.1313-.0441c0 1.1703-.6534 1.8567-1.5767 1.8567-.4233 0-.8056-.1633-1.0466-.47 0 0-.1082.4264-.6618.4264-.6884 0-.6644-.523-.6644-.523.3868.0165.3758-.2145.3758-.436v-2.8862c0-.3552-.0742-.4795-.4269-.4865.0136-.1072.0777-.5376.6789-.5376.8156 0 .7615.9149.7615.9149v.786c.229-.268.5516-.3942.9905-.3942.9624 0 1.5697.6447 1.5697 1.7495zm-1.0937.0806c0-.8983-.2716-1.3557-.7616-1.3557-.4393 0-.74.3968-.74 1.1047v.3602c0 .7205.3152 1.1168.7631 1.1168.477 0 .7385-.4134.7385-1.226zm-3.2425-.0365c0 1.1528-.688 1.8271-1.7806 1.8271-1.0937 0-1.7726-.6743-1.7726-1.8271 0-1.1584.6789-1.8252 1.7726-1.8252 1.0927 0 1.7806.6719 1.7806 1.8252zm-1.0832 0c0-.8693-.236-1.2997-.6974-1.2997-.467 0-.6874.4304-.6874 1.2997 0 .8662.2205 1.299.6874 1.299.469 0 .6974-.4328.6974-1.299zm-5.9895-2.716c-.268.0782-.7901.0972-1.5516.0972-.925 0-1.5391-.039-1.8543-.039-.5195 0-.7254.1342-.9088.6592.3006-.1017.6729-.1087 1.1353-.1087.3512 0 .4108.0431.4108.2941V18.846c0 .2821.1178.6789.7255.6789.7104 0 .8346-.526.8346-.526-.3552-.007-.4248-.1313-.4248-.4865V15.952c0-.2675.1012-.2795.471-.2795.1252 0 .2094.007.2605.007.545 0 .6883-.1047.9018-.6398zm3.1303 3.962s-.018.523-.6664.523c-.556 0-.6403-.4113-.6403-.4113-.248.2996-.6207.4549-1.0656.4549-.7655 0-1.2996-.5135-1.2996-1.2896 0-.786.557-1.28 1.3993-1.28.3843 0 .7274.1462.9258.4037.0036-.0706.0106-.1362.0106-.1968 0-.5622-.3051-.8127-1.007-.8127-.3382 0-.6669.0486-1.015.1408.1131-.219.1923-.3793.2945-.4574.1293-.0972.4329-.1408.9469-.1408 1.265 0 1.746.4259 1.746 1.4279v1.2024c0 .3161.0276.4359.3708.4359zm-1.3262-.745c0-.4815-.2555-.747-.6378-.747-.4013 0-.6668.2825-.6668.7595 0 .467.279.7615.6513.7615.3893 0 .6533-.275.6533-.774z" />
      </svg>
    </IconNb>
  )
}

const Twitter = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#1DA1F2" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Twitter</title>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    </IconNb>
  )
}

const Wikipedia = (props) => {
  return (
    <IconNb size={5} viewBox="0 0 870 873" color="#000000" {...props}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Wikipedia</title>
        <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z" />
      </svg>
    </IconNb>
  )
}

const BrandIcons = {
  Akamai,
  AlibabaCloud,
  AmazonAWS,
  Apple,
  Automattic,
  BattleNet,
  Cloudflare,
  DigitalOcean,
  Edgecast,
  Facebook,
  Fastly,
  Github,
  Google,
  HBO,
  Hetzner,
  Huawei,
  Linode,
  Microsoft,
  MicrosoftAzure,
  Netflix,
  OVH,
  Slack,
  StackPath,
  Taobao,
  Twitter,
  Wikipedia
}

export { Icon, FontAwesomeIcon, BrandIcons }
