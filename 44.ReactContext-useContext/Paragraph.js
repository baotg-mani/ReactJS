import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {

   const context = useContext(ThemeContext) 

   return (
      <p className={context.theme}>
         Dependency là mối quan khi một đối tượng A phụ thuộc vào đối tượng B. Những thay đổi ở đối tượng B có thể ảnh hưởng đến đối tượng A. Ví dụ như ta có đối tượng khách hàng và đơn hàng. Khi thay đổi thông tin khách hàng ví dụ như kiểu dữ liệu của id khách hàng thì tại đơn hàng thông tin id của khách hàng cũng phải thay đổi theo
      </p>
   )
}

export default Paragraph