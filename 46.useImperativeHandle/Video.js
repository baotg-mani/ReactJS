import { useImperativeHandle, forwardRef, useRef } from 'react'
import video1 from './videos/video-1.mp4'

function Video(props, ref) {
   const videoRef = useRef()

   /* @param:
      - ref: ref của component cha truyền qua forwardRef vào đối số thứ 2 của function component
      - callback: return ra obj là thứ mình muốn cho ref bên ngoài được sử dụng
   */
   useImperativeHandle(ref, () => ({
      play() {
         videoRef.current.play()
      },
      pause() {
         videoRef.current.pause()
      }
   }))

   return (
      <video
         ref={videoRef}
         src={video1}
         width={300}
      />
   )
}

// forwardRef HOC: thêm tính khả dụng prop ref của function component bằng cách nhận và chuyển tiếp tới đối số thứ 2 của function component được dùng
export default forwardRef(Video)