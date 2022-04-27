# forwardRef(func component) HOC: giúp chuyển tiếp Ref giữa các component cha con
   - Dùng ở component đích, component là lấy ra element
   - Lấy ref của component cha (component sử dụng element ref lấy được) truyền vào đối số thứ 2 của funtion component con (component nằm trong '(...)')


# useImperativeHandle() hook: giúp tùy chỉnh Ref của 1 function component
   - Dùng ở component đích, component là lấy ra element
   - syntax: useImperativeHandle(ref, function), trong đó ref lấy từ đối số thứ 2 của function component, còn function sẽ return về 1 obj mà trong đó có các thuộc tính mà mình muốn component bên ngoài có thể sử dụng.

