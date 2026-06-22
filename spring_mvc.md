# Spring MVC 
- là framework phát triển các ứng dụng java,
- tổ chức theo module nên dễ tái sử dụng 
- Spring mvc: được thiết kế dành cho xây dựng ứng dụng nền tảng web. 
- Spring security: xác thực, phân quyền
- spring boot: framwork phát triển ứng dụng một cách nhanh chóng 
- spring batch: giúp ng dùng dễ dàng scheduling, processing 
... 

- MVC (Model - View - Controller)

- gửi request nhận về responese 

- Anomations: chú thích cho biết lớp đó đóng vai trò gì trong bộ điều khiển MVC. 

ex: @Controller, @RequestMapping 

@RequestMapping để ánh xạ các yêu cầu tới các phương thức cửa bộ điều khiển. 

1. Servle điều phối 
- Dispatcher Servlet: là thành phần trung tâm của spring mvc, chịu trách nhiệm xử lý tất cả các yêu cầu http đến và quản lý toàn bộ luồng yêu cầu. 


2. Maven và Gradle: 

a. Maven 
- create in 2003, current version 3.3.1 

- là 2 công cụ tự động hóa build và quản lý dự án phổ biến trong lập trình java. 

- Maven phát triển bởi Âpche Software, là công cụ quản lý và xây dựng dự án dựa trên khái niệm POM (project object model). toàn bộ dự án được định nghĩa trong file pom.xml 


- Sử dụng tệp pom.xml để khai báo cấu trúc dự án, các thư viện phụ thuộc và các plugin. 


b. Gradle 
- cong cụ tự động hóa, lấy cảm hứng từ những nhược điểm của Maven và Ant. Sử dụng một DLS (Domain - Specific language) dựa trên Groovy haowjc Kotlin để định nghĩa các kịch bản build. 
- Sử dụng các tệp build.gradle viết bằng Groovy hoặc .kts viết bằng Kotlin. 
- Hiệu suất và tốc độ build nhanh hơn maven, nhờ vào các cơ chế như build caching và incremental builds (chỉ build lại những phần đã thay đổi) 

