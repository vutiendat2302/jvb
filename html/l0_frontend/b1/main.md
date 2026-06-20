1. Tìm hiệu CSS position, Float, Display 
- postion: xác định vị trí của một phần tử bên trong mọt phần tử cha(container). Để điều chỉnh tạo độ chính xác,  kèm theo các thuộc tính hỗ trợ như top, bottom, left, right, z-index 

Có 5 giá trị chính của position:
static (Mặc định): Các phần tử hiển thị theo thứ tự luồng thông thường của văn bản HTML (document flow)
. Các thuộc tính top, bottom, left, right hay z-index hoàn toàn không có tác dụng đối với phần tử static
.
relative (Tương đối): Phần tử được định vị tương đối so với vị trí bình thường ban đầu của chính nó
. Bạn có thể dùng các thuộc tính hỗ trợ để xê dịch phần tử này, nhưng khoảng trống gốc ban đầu của nó vẫn được giữ nguyên và không làm thay đổi hay xô lệch vị trí của các phần tử khác xung quanh
.
absolute (Tuyệt đối): Phần tử bị loại bỏ hoàn toàn khỏi luồng hiển thị bình thường (nó không để lại khoảng trống và các phần tử khác sẽ chiếm chỗ của nó)
. Vị trí của nó được canh tương đối theo phần tử cha gần nhất có position khác static
. Nếu không có phần tử cha nào thỏa mãn, nó sẽ canh theo thẻ gốc <html> (viewport)
.
fixed (Cố định): Tương tự như absolute, phần tử fixed bị loại khỏi luồng bình thường và không chừa lại khoảng trống
. Điểm khác biệt là nó luôn được định vị cố định tương đối so với khung nhìn của trình duyệt (viewport)
. Điều này có nghĩa là phần tử sẽ đứng yên tại một vị trí trên màn hình ngay cả khi bạn cuộn trang
.
sticky (Dán chặt): Đây là sự lai tạp giữa relative và fixed
. Ban đầu, phần tử hoạt động như một phần tử relative bình thường. Tuy nhiên, khi người dùng cuộn trang tới một ngưỡng tọa độ nhất định (ví dụ top: 0), nó sẽ lập tức chuyển sang trạng thái fixed và "dính" chặt vào vị trí đó trên màn hình
. Người ta thường dùng sticky để tạo thanh điều hướng (floating navigation bar)
.

- Thuộc tính display
Thuộc tính display quyết định cách hiển thị của các phần tử và cách chúng chiếm không gian trên màn hình
. Các giá trị quen thuộc nhất bao gồm:
inline (Trực tuyến): Đây là giá trị mặc định của các thẻ văn bản như <span>, <b>, <i>
. Các phần tử inline sẽ nằm cạnh nhau trên cùng một dòng và chỉ tự động nhảy xuống dòng tiếp theo nếu quá dài
. Chiều rộng của chúng bị giới hạn đúng bằng nội dung bên trong, vì vậy bạn không thể căn giữa text bên trong một phần tử inline
.
block (Khối): Đây là mặc định của các thẻ như <div>. Trái ngược với inline, phần tử block sẽ tự động chiếm toàn bộ chiều rộng của dòng
. Nó đẩy các phần tử phía sau xuống một dòng mới bất kể nội dung bên trong ngắn hay dài
. Bạn hoàn toàn có thể thiết lập kích thước (width) cho các phần tử này
.
inline-block: Kết hợp cả hai ưu điểm trên. Các phần tử sẽ được xếp cạnh nhau trên cùng một dòng (giống đặc tính inline), nhưng bạn lại có thể tùy chỉnh kích thước chiều rộng/chiều cao của chúng một cách dễ dàng (giống đặc tính block)

- Thuộc tính float (Trôi nổi)
Thuộc tính float cho phép các phần tử khối (block) hiển thị trôi nổi cạnh nhau trên cùng một dòng thay vì tự động đẩy xuống dòng mới
.
Để các phần tử float nằm được trên cùng một dòng, tổng chiều rộng của chúng phải nhỏ hơn chiều rộng của phần tử cha chứa chúng
.
Nếu tổng chiều rộng của các phần tử trôi nổi vượt quá không gian của phần tử cha, phần tử thừa ra sẽ bị chặn lại và tự động nhảy xuống dòng tiếp theo
.
Để ngắt hiệu ứng trôi nổi và ép phần tử tiếp theo bắt đầu ở một dòng hoàn toàn mới, bạn có thể sử dụng thuộc tính clear: both

2. Mỗi 1 phần tử đều chiếm 1 không gian trên web, tính không gian đó như thế nào : Width, Height ....


- Mỗi phần tử web là một "chiếc hộp" bao gồm 4 thành phần từ trong ra ngoài, và tổng không gian chiếm dụng trên giao diện được tính cộng dồn từ 4 yếu tố này:

Content (Nội dung): Không gian trung tâm chứa nội dung, được đo bằng width và height.
Padding (Vùng đệm): Khoảng cách từ nội dung tản ra đến đường viền.
Border (Đường viền): Viền bao bọc bên ngoài lớp Padding.
Margin (Lề ngoài): Khoảng cách đẩy từ viền của phần tử này ra xa các phần tử khác xung quanh.

Công thức tính toán tổng không gian chiếm dụng:
Tổng chiều rộng thực tế trên trang = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right.
Tổng chiều cao thực tế trên trang = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom.

- Nếu tính kích thước của element thì không tính thêm margin 

3. Tìm hiểu CSS media với các kích cỡ màn hình khác nhau. Responsive.

- RWD (Response Web Design) là phương pháp thiết kế giúp trang web tự động thích ứng thay đổi bố cục hiển thị tốt trên mọi thiết bị, để làm được điều này, công cụ quan trọng nhất trong CSS là Media Queries. 

- CSS Media Query là: một tính năng trong css3, sử dụng quy tắc @media để áp dụng một nhóm các thuộc tính css chỉ một điều kiện cụ thể về thiết bị được thỏa mãn. 

Cú pháp cơ bản: @media media_type and (condition) { /* Các quy tắc CSS */ }
Media Type (Loại phương tiện): Xác định loại thiết bị mà CSS hướng tới. Các giá trị phổ biến bao gồm all (tất cả thiết bị), screen (màn hình máy tính, điện thoại, máy tính bảng), print (dành cho máy in) và speech (trình đọc màn hình)
.
Condition (Điều kiện / Tính năng): Thường sử dụng các thuộc tính như max-width (chiều rộng tối đa), min-width (chiều rộng tối thiểu), orientation (hướng xoay ngang/dọc của màn hình) để làm điểm ngắt (breakpoint)

- Các kích cơ màn hình thông dụng: 
Vì trên thị trường có vô số thiết bị với độ phân giải khác nhau, không có một tiêu chuẩn duy nhất nào bắt buộc cho tất cả. Tuy nhiên, các lập trình viên thường quy ước sử dụng các dải kích thước (breakpoints) phổ biến sau đây để chia bố cục
:
320px - 480px: Các thiết bị di động (Mobile devices)
.
481px - 768px: iPads, máy tính bảng (Tablets)
.
769px - 1024px: Màn hình nhỏ, Laptops
.
1025px - 1200px: Desktops, màn hình lớn
.
1201px trở lên: Màn hình cực lớn, TV

Ngoài ra, một số bộ khung (framework) cũng chia CSS theo các ngưỡng kích thước tối thiểu (min-width) như: 600px (thiết bị nhỏ), 768px (thiết bị trung bình), 992px (thiết bị lớn) và 1200px (thiết bị cực lớn)
.
- Hai phương pháp tiếp cận Responsive chính. Dựa vào cách sử dụng breakpoints ta cs 2 chiến lượt: 
+ Mobile First (Ưu tiên thiết bị di động): Đây là phương phpas dược khuyến nghị nhiều nhất hiện nay. giúp các web tải nhanh hơn trên thiết bị nhỏ , sử dụng min-width để query mở rộng .. 
+ Desktop First / PC first: code tren màn hình to, sử dụng max-width để thu nhỏ và gọt dao diện cho vừa với các màn hình 

- Một số quy tắc kết hợp bắt buộc trong RWD: 
Để CSS Media Queries hoạt động chính xác, bạn cần kết hợp thêm các yếu tố sau:
Khai báo thẻ Meta Viewport: Bắt buộc phải thêm thẻ <meta name="viewport" content="width=device-width, initial-scale=1.0"> vào phần <head> của HTML để trình duyệt biết cách kiểm soát kích thước hiển thị theo chuẩn của từng thiết bị
.
Sử dụng đơn vị tương đối: Hạn chế dùng kích thước cố định như px (pixel) cho các phần tử bao quát. Thay vào đó, hãy dùng %, vw, vh, em, rem để các phần tử có thể tự động co giãn theo khung nhìn
.
Làm cho hình ảnh linh hoạt: Để hình ảnh hay video không bị tràn ra ngoài màn hình trên điện thoại, luôn nhớ thiết lập CSS: max-width: 100%; height: auto;