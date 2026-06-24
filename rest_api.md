# API - Restful api 
- để một api được coi là restful, nó phải đáp ứng kiến trúc máy chủ - khách với yêu ầu quản lý thông qua giao thức HTTP 

- REST ( representational state transfer): tập hợp các ngyên tắc giúp xây dựng hệ thống phân tán: dễ mở rộng, bảo trì, tâppj dụng hiệu quả giao thức HTTP 
- Endpoint - điểm truy cập api: là đường dẫn URL nơi client yêu cầu. Mỗi endpoint tương ứng với một hành động cụ thể. 

- request: bao gồm địa chỉ endpoint, phương thức HTTP, header (như loại dữ liệu, token xác thực) và body (dữ liệu gửi lên be nếu có)

- response: sẽ trả về mã trạng thái HTTP, dữ liệu phản hồi (body) và header liên quan 
- Mã trạng thái HTTP (status code): 
+ 200 Ok, 201 created, 400 bad request, 402 unauthorized, 404 not found, 500 internal server error

- Authentication request không sử dụng session và cookie mà dùng một access token với mỗi request. 

- Không phù hợp cho thời gian thực


# HTTP: 
- (HyperText Transfer Protocol) là giao thức truyền tải siêu văn bản, một giao thức mạng trao đổi dữ liệu giữa client và server 

# HTTPS:
- Sử dụng chứng chỉ SSL/TLS nhờ vậy moi dữ liệu giữa trình duyệt web và server được mã hóa để đảm bảo an toàn. 
