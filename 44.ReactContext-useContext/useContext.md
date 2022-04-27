# React Context: 
   - Context trong React hiểu như là một phạm vi truyền dữ liệu cho Component tới các Component con của nó.
   - Context được tạo ra bởi method .creatContext() trong lib React
   - Có thể tạo nhiều Context. Mỗi Context là 1 obj có Provider và Consumer (là Component). Truyền dữ liệu qua prop value trong Povider. Nhận dữ liệu ở tại vị trí hàm Component con mà mình muốn sử dụng, thông qua useContext hook

# Các bước thực hiện:
   1. Tạo Context (export Context)
   2. Provider (dùng prop value)
   3. Consumer (dùng hook useContext(Context) để get dữ liệu)