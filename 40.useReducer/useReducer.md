# useReducer():

-  Cung cấp thêm một sự lựa chọn để sử dụng state cho function component.
-  Dùng thay thế cho useState() được và ngược lại
-  State phức tạp => useReducer
-  State đơn giản => useState

# Các bước cần thực hiện khi dùng useReducer hay sau này dùng Redux cũng vậy:

1. Init state
2. Actions
3. Reducer: 
   - reducer thực chất là 1 cái hàm
   - @input: state hiện tại (ban đầu = initState), action
   - @output: state mới
4. Dispatch (kích hoạt 1 action)
