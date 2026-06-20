1. Khái niệm, cách thức hoạt động của một website? 
- Website là một tập hợp các trang web được liên kết với nhau và được truy cập thông qua Internet bằng một địa chỉ gọi là domain/tên miền.

- Một website thường gồm nhiều trang nhỏ bên trong, (tạo bởi 3 phần chính, html, css, js) 

- Cách thức hoạt động: Người dùng nhập địa chỉ vào trình duyệt -> trình duyệt gửi yêu cầu đến server -> server xử lý yêu cầu -> trả dữ liệu cho trình duyệt -> trình duyệt hiển thị web cho ng dùng 

- các thành phần chính trong website: 

Thành phần	Vai trò
Client / Browser	Trình duyệt của người dùng, ví dụ Chrome
Domain	Tên miền website, ví dụ google.com
DNS	Hệ thống chuyển tên miền thành địa chỉ IP
Server	Máy chủ lưu trữ và xử lý website
Database	Nơi lưu dữ liệu như tài khoản, sản phẩm, đơn hàng
Frontend	Phần giao diện người dùng nhìn thấy
Backend	Phần xử lý logic phía server


2. Sự khác biệt giữa client và server là gì 
- client: phía người dùng, thường là trình duyệt hoặc ứng dụng trên điẹn thoại 
- server: máy chủ, nơi lưu trwux dữ liệu, xử lý theo yêu cầu và trả kết quả về cho client 

3. Web application và Web server thực tế, ví dụ 
- web app là ứng dụng chạy trên web, nó không chỉ hiển thị nọi dung tĩnh mà còn có chức năng ... ex: facebook, mess, map, .. 

- web sẻver: là phần mềm hoặc máy chủ nhận request từ cilent và trả response về cho client 

4. Domain, DNS, khái niệm, cách thức hoạt động 
- Domanin: là tên miền của web, mỗi server có một địa chỉ ip adress, nhưng con người rất khó nhớ các dãy số vậy nên ngta dùng domain 

Domain chỉ là tên website/máy chủ.

URL là địa chỉ đầy đủ đến một tài nguyên cụ thể trên website.

Ví dụ khác:

URL:    https://shopee.vn/search?keyword=ao-thun
Domain: shopee.vn
Path:   /search
Query:  ?keyword=ao-thun

Tức là:

Domain = địa chỉ nhà
URL = địa chỉ nhà + phòng cụ thể + yêu cầu cụ thể

1IP- chạy nhiều web, có thể phục vụ nhiều domain 

5. HTTP: Request, Header, Payload, Response, Status Code

- http: hyper text transfer protocol: là giao thức dùng để  cilent và server giao tiếp với nhau trên web. 

- request: là yêu cầu màu cilent gửi lên server 
Một HTTP request thường gồm:

Method
URL/Endpoint
Headers
Payload/Body

Ví dụ request đăng nhập:

POST /api/login HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "username": "dat",
  "password": "123456"
}

Trong đó:

POST /api/login        → request method + endpoint
Host                  → server/domain được gọi tới
Content-Type          → kiểu dữ liệu gửi lên
Payload/Body          → dữ liệu username/password

- Header: phần thông tin bổ sung trong request, response, 
- Payload/ body: là phần dữ liệu chính mà cilent gửi 
- Response là phản hồi mà server trả về cho client sau khi xử lý request.

Một response thường gồm:

Status Code
Headers
Body

- Status Code; là mã trạng thái cho biết request thành công hay thât bại

Nhóm	Ý nghĩa
2xx	Thành công
3xx	Chuyển hướng
4xx	Lỗi từ phía client
5xx	Lỗi từ phía server

Một số status code phổ biến:

Status Code	Ý nghĩa	Ví dụ
200 OK	Thành công	Lấy danh sách sản phẩm thành công
201 Created	Tạo mới thành công	Thêm sản phẩm thành công
400 Bad Request	Request sai	Gửi thiếu dữ liệu
401 Unauthorized	Chưa xác thực	Chưa đăng nhập
403 Forbidden	Không có quyền	User thường truy cập trang admin
404 Not Found	Không tìm thấy	Sai URL hoặc không có dữ liệu
500 Internal Server Error	Lỗi server	Code backend bị lỗi


