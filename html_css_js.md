# HTML 
 
1. Introduction:
- Là ngôn ngữ đánh dấu siêu văn bản (HyperText Markup Language) - Không phải là ngôn ngữ lập trình, vì o có logic chủ yếu để tạo cấu trúc nội dung cho trang web 

- lịch sử ptrien: 1991 - Berners-lee ptrien, 1995 2.0, 1997, 3.2 , 2000, xhtml, 2014 html5 (phiên bản hỗ trợ viddeo, audio) 

- Các thuật ngữ html:
a. Element là một thành phần hoàn chỉ gồm thẻ mở, nội dung, thẻ đóng 
b. Tag là thẻ html (thẻ mở, thẻ đóng)
c. attribute: là thuộc tính html, bổ sung thông tin cho thẻ 
d. nested elements: phần tử lồng nhau 
e. Document là toàn bộ file html 

f. HTML, CSS và js liên quan tới nhau: html khung xương, css giao diện, js hành động, tương tác 

g. sự khác biệt giữa html và html5: html5 là phiên bản mới, có nhiều thẻ semantic hơn (thẻ có ý nghĩa rõ ràng), có nhiều type, hỗ trợ audio, video ... đi cùng nhiều api mới của trình duyệt 

h. Các phần mềm lập trình: vs code, note pad++, sublime text, webstorm (là ide chuyên nghiệp của jetbrains dùng nhiều cho js/typesscript/ frontend) 

2. block-level tag là thẻ dạng khối, thường chiếm hết chiều ngang của dòng. Inline tag là thẻ dạng nội tuyến, không bắt đầu trên dòng mới, chiếm chiều rộng vauwf đủ nội dung 


3. Bố cục một trang html hoàn chỉnh: 
Header      → phần đầu trang
Nav/Menu    → thanh điều hướng
Main        → nội dung chính
Section     → từng khu vực nội dung
Article     → bài viết / card / nội dung độc lập
Aside       → nội dung phụ / sidebar
Footer      → chân trang


4. HTML attribute là thuộc tính của thẻ HTML, dùng để bổ sung thêm thông tin hoặc cấu hình hành vi cho thẻ. Attribute thường nằm trong thẻ mở. 
Những attribute mở rộng / global attribute. Global attributes là các attribute có thể dùng với hầu hết các thẻ HTML.j Ex: id, class, style, hidden, ... 


5. DOM là mô hình dạng cây biểu diễn toàn bộ trang HTML sau khi trình duyệt đọc xong.Nếu chỉ có HTML thì trang web gần như tĩnh.khi dùng JS xử lý DOM, ta có thể:

- Đổi nội dung HTML
- Đổi màu, đổi class CSS
- Thêm phần tử mới
- Xóa phần tử
- Bắt sự kiện click, nhập dữ liệu, submit form
- Validate form
- Hiển thị/ẩn menu
- Render danh sách sản phẩm

- Các cách chọn phần tử DOM: theo id, theo class, theo tag name, 






------------------------------ 

- <head>: Hiển thị trên tab (title), có thể có css, ... 

- <body>: nội dung hiển thị trên web

- <html>: chứa toàn bộ code html

- Doctype: Khai báo html 5

``` 
- ctrl + U: xem mã nguồn html trên trang 

- ctrl + shif + I: xem các elements 
``` 

- html không phân biệt chữ hoa với chữ thường đối với tên thẻ. 

- comment trong html: <!-- -->

2. Các thẻ html: 
- <a>: Liên kết 
- <img>: hình ảnh 
- <br>: empty html element: line break, định nghĩa một dấu xuống dòng nếu dùng trong thẻ p 
- <p>: paragraph, luôn bắt đầu trên một dòng mới, tự động thêm khoảng trắng và lề trước và sau đoạn văn, không thể tự thêm khoangr trắng, trình duyệt sẽ tự bỏ đi 
- <h>: tieu de
- <hr> đường kẻ ngang 
- <pre>: Định nghĩa văn bản được định sẵn, giữ nguyên khoảng trắng trong văn bản và xuống dòng 

3. Thuộc tính HTML (Attributes)
- Tất cả các phần tử html đều có thuộc tính 
- Luôn được chỉ định trong thẻ mở 

ex: <img src = "" width = "500" height = "500" alt = "Gril width a jacket>

- Thuộc tính alt: sẽ chỉ định văn bản thay thế hình ảnh trong th lỗi kết nối, kết nối chậm ... 

- Thuộc tính style sử dụng để thêm các kiểu dáng cho 1 phần tử, màu sắc, phông chữ, kích thước 

<p style = "color:red;"> This ís a red </p> 


- thuộc tính "lang": xác định ngôn ngữ của trang html, hai kí tự cuối cùng xác định quốc gia, 2 kí tự đầu tiên xác định ngôn ngữ trang html "vietnamese: vi" 

- thuộc tính tilte: xác định một số thông tin bổ sung về 1 phần tử , hiển dưới dạng chú thích khi di chuyển chuột qua phần tử 

- html không yêu cầu dấu ngoặc kép xung quanh các giá trị thuộc tính, khuyến nghị sử dụng 

4. Thuộc tính style 
- Một số kiểu css hay dùng: 
    + background-color: làm màu nền 
    + color: màu chữ 
    + font-family: phông chữ 
    + font-size: kích thước chữ 
    + text-align: căn lề 
    + border: aa solide bb; 

5. HTML Formatting Elements trong văn bản 
- <b>: bold text, in dam ma khong có ý nghĩa đặc biệt nào 
- <strong>: văn bản quan trọng, in đậm 
- <i>: in nghieng
- <em>: van ban duoc nhan manh, in nghiêng 
- <mark> van ban duoc danh dau, bôi vàng, highlight 
- <small> chu nho hon 
- <del> van ban da bi xoa, gạch ngang chữ 
- <sub> van ban chi so duoi
- <sup> chu viet nho phia tren 
- <ins> gạch chân chữ 

6. Các phần tử chính dẫn 
- <blockquote>: định nghĩa một đoạn văn bản được trích dẫn từ nguồn khác 
- <q>: định nghĩ một đoạn trích dẫn, bằng cách thêm ngoặc kép 
- <abbr> định nghĩa một từ viết tắt 
- <address> định nghĩa địa chỉ, thông tin liên hệ 
- <cite> tiêu đề cho tác phẩm 

6. Color names 
- tomato, orange, dodgerblue, mediumseagreen, gray, violet, lightgray, slateblue 
- color value rgba, hsla 
ex style="color:rgba(255, 99, 71);

7. html - css 
css: cascading style sheets
- có thể kiểm soát bố cục của nhiều trang cùng một lúc. 
- có thể thêm css vào html theo 3 cách: 
    + nội tuyến: sử dụng thẻ style trong các phần tử html 
    + nội bộ: sử dụng một <style> trong <head>
    + bên ngoài: sử dụng <link> phần tử để liên kết đến một tệp css bên ngoài 

8. liên kết html - thuôc tính target (chỉ định vị trí mở tệp liên kết) 
- _self: mặc định, mở cừng cửa sổ, mà bạn nhấp chuột 
- _blank: mở tài liệu trong một cửa số, tap mới
- _parent: mơ trong khung cha
- _top: mở ở chế độ toàn màn hình 
- sử  dụng hình ảnh làm liên kết, mailto: ... 
- có thể thay đổi được màu sắc liên kết bằng cách sử dụng css
- có thể tạo kiểu liên kết như một nút bằng cách sử dụng css 

9. Tạo dấu trang trong html 
- thuộc tính id = a : để định nghĩa dấu trang trong một trang 
- thuộc tính href = a, để liên kết đến dấu trang 

10. image 
- <img src = ... alt = ... style = >
 
- thuộc tính float: cho phép hình ảnh nổi sang trái hoặc sang phải 

- bản đồ hình ảnh: thẻ <map> định nghĩa một bản đồ hình ảnh. Trong ảnh sẽ chia thành các vùng để nhấp chuột, các vùng được định nghĩa bằng thẻ <area>, 

- thêm hình nền cho một phần tử html sử dụng style: thuộc tính: background-image: 

- nếu muốn hình nền bao phủ toàn bộ phần tử, có thể đặt thuộc tính background-size: cover; đảm bảo phần tử được bao phủ, hãy đặt background-attachment: fixed; 

- Phần tử html: <picture> cho phép hiển thị các ảnh khác nhau cho các thiết bị hoặc màn hình có kích thước khác nhau. Phần tử <picture> sẽ chứa nhiều <source> phần tử con, mỗi ptu con tham chiếu đến một hình ảnh khác nhau thông qua srcset thuộc tính. Mỗi suộc đều có một ptu media xác định thời điểm hình ảnh đó là phù hợp nhất. 

- Favicon là một hình ảnh nhỏ được hiển thị cạnh tiêu đề trang trong tap trình duyệt, để thêm vào dùng link trong head tới link ảnh 

11. Html table 
- Mỗi ô trong bảng được xác định bởi thẻ <td> và </td> 
- Hàng trong bảng: <tr> </tr>, có bao nhiêu hàng tùy thích trong một bảng, chỉ cần đảm bảo số lượng ô trong mỗi hàng là như nhau 
- Tiêu đề bảng: thẻ <th> thay cho thẻ <td>, theo mặc định các phần tử trong thẻ <th> sẽ được in đậm, căn giữa, có thể thay đổi bằng css 
- caption: tieu de bang
- <thead>: nhom phan dau bang
- <tbody>: nhom phan than bang 
- <tfoot>: nhom phan cuoi bang 
- <colgropu>: nhóm các cột lại 

- Add border for table:sử dụng css: border, border-collapse, collapse, border-style: none, hidden, solid, dotted, border-color: ...

- Kích thước bảng trong html: sử dụng style với các thuộc tính width, height. Thêm style kích thước vào thẻ <th> hoặc <td>. Chiều cao của bảng, thêm style vào phần tử của hàng 

- Tiêu đề bảng dọc, hãy định nghĩa ô đầu tiên trong mỗi bảng là một <th>, các ô còn lại trong một hàng là <td> 

- Tiêu đề cho nhiều cột: thêm thuộc tính colspan vào thẻ <th> 
- Chú thích bảng: <caption> </caption> 
- Khoảng cách và lề của bảng html: mặc định là 0, để thêm khoảng cách, add sytle css: padding: 3px. Khoảng cách giữa các ô: border-spacing: 

- thuộc tính rowspan: gộp hàng 
- Định dạng bảng: hiệu ứng sọc vằn add style tr:nth-child(even) {background-color:blue;}

- vách ngăn hàng: thêm border-bottom
- :hover cho tr để làm nổi bật các hàng trong bảng khi di chuột qua 

12. Html list 
- Không có thứ tự: <ul> 
- Có thứ tự: <ol> 

- các mục trong danh sách đều bắt đầu bằng <li> </li>

13. Khối html và các phần tử nội tuyến 
- các phần tử khối luôn bắt đầu trên một dòng mới, và trình duyệt luôn thêm 1 khoảng trống trước và sau phần tử đó Luoon chiếm toàn bộ chiều rộng có sẵn
- Hai phần tử khối thường được sử dụng là: <p> và <div> 
- <div>: định nghĩa một phân vùng hoặc một phần trong tài liệu html 
- Các phần tử nội tuyến, không bắt đầu tren một dòng mới, chỉ chiềm chiều rộng cần thiết

- Lưu ý: Một phần tử nội tuyến không thể chứa phần tử cấp khối 

- Phần tử <div> thường được sử dụng như một vùng chứa cho các phần tử html khác, khi dùng với css, div có thể dùng để tạo kiểu cho các khối có nội dung 

- phần tử span: sử dụng đánh dấu một phần văn hoặc một phần của tài liệu

14. Thuộc tính lớp html 
- class: dùng để chỉ một lớp cho 1 phần tử html 
- nhiều phần tử có thể cùng chia sẻ một lớp 

- class: được javascript sử dụng để truy cập và thao tác 
- sử dụng đuọc bất kì trên phần tử html nào 
- tên lớp phân biệt chữ hoa chữ thường 
- cú pháp tạo một lớp, viết dấu (.) theo sau là tên lớp. sau đó định nghĩa các thuộc tính CSS trong dấu ngoặc nhọn 

- Các phần tử html có thể thuộc về nhiều lớp khác nhau. Để dịnh nghĩa nhiều lớp, hãy phân tách các lớp bằng dấu " ", 
ex: <div class = "city main">. Phần tử sẽ được định kiểu theo tát cả các lớp đã chỉ địn 

15. Thuộc tính id: chỉ định duy nhất một phần tử html 
- cú pháp cho id: kí tự #, theo sau tên là id, sau đó là các thuộc tính css trong dấu ngoặc nhon 

- ví dụ: ta có một phần tử h1 trỏ đến id có tên là "myhead". Phần tử này sẽ được định kiểu theo myhead 

- Sự khác biệt giữa lớp và id: class có thể sử dụng bởi nhiều ptu html, còn id chỉ được sử dụng một phần tử html duy nhất trong trang 

16. Buttions
- Các nút có thể gửi biểu mẫu, chạy javascript .... 
- <button>: định nghĩa một nút có thể  nhấp chuột 
- bản thân nút bấm sẽ không lmj cho đến khi thêm  một hành động vào nó 

- vô hiệu hóa nút <button disabled>: đảm bảo cho nút ko thể nhấp được 

- chức năng của nút: thuộc tính type: có 3 thuộc tính: buttion: nút bấm thông thường, summit: gửi biểu mẫu, reset: đặt lại tất cả 

17. HTML Iframes:
- Thẻ iframe để hiện thị một trang web bên trong một trang web khác 
- nhúng một tài liệu vào bên trong html hiện tại 
- <iframe src = .. style= .. title = ...></iframe>

18. HTML Script: 
- Định nghĩa một đoạn mã 
- thay đổi nội dung, kiểu dáng, thuộc tính ...

19. head là một vùng chứa cho các phần tử title, style, meta, link, script, base 
- không được hiển thị trên trang, 
- thiết lập khung nhìn 

20. Bố cục HTML 
- html có một số phần tử xác định các phần khác nhau của một trang web: 

- <header>: tiêu đề 
- <nav>: xác định một tập hợp các liên kêt điều hướng 
- <section> một phần trong tài liệu 
- <aside>: nội dung bổ sung 
- <footer> 
- <details>: các chi tiết bổ sung 

- có bốn kĩ thuật tạo khung bố cục nhiều cột, mỗi kĩ thuật đều có ưu điểm và nhược điểm 

Khung CSS 
- sử dụng framework css 
1. bố cục nổi css: float 

2. bố cục flexbox css: flex 

21. From 
- Phần tử <inpupt> là phần tử biểu mẫu đươc sử dụng nhiều nhất, tùy thuộc vào type và thuộc tính của nó. 
+ text, radio, checkbox, submit, button 

- Phần tử label, định nghĩa nhãn trong biểu mẫu, 



22. Luu y
- them một dấu cách không ngắt dòng: nbsp; 


# CSS (Cascding Style Sheets)
- Mô tả cấch các phần từ HTML hiển thị, 

- Nếu một số thuộc tính được định nghĩa thì giá trị từ định kiểu cuối cùng sẽ được sử dụng 

a. lịch sử ptrien: 1996 - css1, 1998-css2,  2011-css3 
b. cách thức hoạt động, đọc file html, tạo cây DOM, đọc file css, ghép các ccss vào phần tử html tương ứng,  hiển thị trang web 
c. cách nhúng css vào html: 
+ inline css: trực tiếp 
+ internal: viết trong thẻ style 
+ external css: tách file riêng 

1. Box Model là gì?

Mỗi phần tử HTML được trình duyệt xem như một cái hộp.

Box model gồm 4 phần:

Content  → nội dung
Padding  → khoảng cách từ nội dung đến viền
Border   → viền
Margin   → khoảng cách bên ngoài phần tử

2. Các thuộc tính tương ứng
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 30px;
}

3. display quyết định cách một phần tử được hiển thị trên trang.

Cú pháp:

.box {
    display: block;
}

- các display: block (tự xuống dòng, chiếm toàn bộ chiều ngang, có thể set w, h), inline(ko tự xuống dòng, chiếm vừa nội dung, không set w, h hiệu quả như block), display: inline-block kết hợp không tự xuống dòng, có thể set w h 

+ The Inline: giá trị mặc định của các thẻ văn bản như <span>. nằm liền kề sát nhau trên cùng một dòng, chỉ xuống dòng khi gặp giới hạn kích thước, ko thể set w, h

+ thẻ block: khối, giá trị mặc định của các thẻ div. chiếm toàn bộ không gian của các dòng, đẩy các phần tử tiếp theo xuống một dòng mới bất kể nội dung là ngắn hay dài. Có thể chỉ định w, h

+ inline-block: kết hợp, có thể nằm cạnh nhau trên cùng một dòng, có thể chỉn w, h
+ none: giấu ptu khỏi trang web, 
+ cấu trúc linh hoạt: flex cho một phần tử cha, các phần tử con bên trong sẽ có khả năng tự động co giãn. MỘt số thuộc tính đi kèm, flex-wrap: cho phép tự động xuống dòng khi màn hình thu hẹp, gap: tạo khoảng cách đều, flex: quy định khả năng co giãn ptu con, flex-dỉection: quy định hướng xếp của các ptu con: row hay column, justify-content: căn chỉnh các phần tử con theo trục chính, space-between: đẩy các ptu đều ra 2 mép, align-items... 

- Các giá trị position: static(nằm theo luồng bình thường, top, right, lèt bottom không có tác dụng), 
relative: dịch chuyển so với vị trí ban đầu (vẫn giữ chỗ cũ, có thể làm mốc cho abolute bên trong),
absolute: định vị theo phần tử cha gần nhất có position khác static,
fixed: cố định theo màn hình trình duyệt,
sticky(kết hợp relative và fixed) khi cuộn đến vị trí = 0 nó sẽ dính lai, dùng cho menu và dính trên trang, 
z-index: quyết định phần tử nào nằm ở trên

4. Specificity: độ ưu tiên css, 
- Thứ tự ưu tiên cơ bản, từ mạnh đến yếu: 
!important
Inline style
ID selector
Class / attribute / pseudo-class
Tag / pseudo-element
Universal selector

- nếu độ ưu tiên bằng nhau thì css sau sẽ được dùng. 

5. Unit- đơn vị đo trong css 
- đơn vị đo tuyệt đối:( px, mm, in, pt, pc), đơn vị đo tương đối (%, em, rem )

- e2em = 40px, 2 rem = 32px 
- vw, vh (1vw = 1% chiều rộng màn hình, 1vh=1% chiều cao màn  )

6. Transform 
- translate: dịch chuyển các phần tử 
- scalte: phóng t hoặc thu nhỏ 
- rotate: xoay phần tử 
- skew: nghiêng phần tử 

7. Transtion: hover card , .. giúp thay đổi css mượt hơn. Animation dùng để tạo ra chuyển động phức tạp hơn transition. 


8. Nắm được và sử dụng thuộc tính advance css cho trang web và từng phần tử

a. Flexbox: để chia layout một chiều, hàng hoặc cột, 

Các thuộc tính Flexbox quan trọng
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

Ý nghĩa:

Thuộc tính	Ý nghĩa
display: flex	bật flexbox
flex-direction	hướng sắp xếp
justify-content	căn theo trục chính
align-items	căn theo trục phụ
gap	khoảng cách giữa item
flex-wrap	cho phép xuống dòng 

b. Grid: để chia layout hai chiều: hàng và cột 
c. media query: dùng để resposive theo kích thước màn hình, làm giao diện hiển thị tốt trên nhiều thiết bị 


- Chú thích trong css: /* 

- Có thể chỉ định tất cả thuộc tính trong một dòng duy nhất. Điều này được gọi là thuộc tính viết tắt. 

1. Kiểu viền CSS 
2. Lề CSS, tạo khoảng trống xung quanh các phần tử, 
- margin-top: lề trên 
- margin-right: phải ... 
- tất cả các thuộc tính lề đều có thể có các giá trị sau: 
+ độ dài, tự động, %, inherit 


- Sử dụng các framwork css: bootstrap, tailwind css, 


3. Chuẩn CSS hiện nay: 
- Pseudo-class: dùng : 
- Pseudo-element: dùng ::



# JavaSCript
- chấp nhận cả ngoặc kép và ngoặc đơn 
- có thể đặt bất kỳ đoạn mã nào vào html 
- thường đặt trong body, head, các tệp vên ngoài (tệp mở rộng là: .js) 

- viết trong head, sẽ áp dụng cho toàn cục 
- Việt đặt các đoạn mã ở cuối ptu body giúp cải thiện tốc độ hiển thị, vì việc giải mã script làm chậm quá trình hiển thi 

- js không có đối tượng print hoặc phương thức print nào, ngoại lệ duy nhất là gọi window.print() để in nội dung cửa sổ hiện tại 

1. Cú pháp 
- địa nghĩa 2 loại giá trị: 
+ Hằng số (giá trị cố định) 
+ biến (giá trị biến) 

+ let và const đều dùng để khai báo biến, nhưng let thì có thể gán giá trị cho biến. Thường js hay dùng const khi nào cần đổi giá trị thì dùng let, const nếu giá trị không được phép thay đổi. Chỉ sử dụng let nếu bạn không thể sử dụng const 


+ phân biệt chữ hoa chữ thường 
+ Dấu gạch ngang không được sử dụng trong javascript, chỉ dành rieng cho phép trừ 

+ thường sử dụng kiểu camelCase: userName; 

+ Dấu chấm phẩy dùng để phân tách các câu lệnh js (có thể viết nhiều câu lệnh trên cùng một dòng), việc kết thúc là dấu chấm phẩy không bắt buộc 

+ js bỏ qua khoảng trắng, thêm khoảng trắng vào để dễ đọc hơn 

+ comment trong js: //, bình luận nhiều dòng /*  */ 

+ js coi dấu gạch dưới _, hay $  trong js là một chữ cái, các định danh có dấu gạch dưới là hợp lệ 

----- 
1. Data type: nguyên thủy (lưu theo giá trị), kiểu tham chiều (hàm, đối tượng, ...) 

2. Loops: for, while, do...while, for...of, for...in 
3. Function, arrow function: Function có this riêng, arrow function: không có this riêng, 
4. array methods: push, pop, shift, unshift, map, filter, find, findindex 
5. Window object là đại diện cho cửa sổ trình duyệt 
6. This là từ khóa trỏ tới đối tượng đang gọi hàm 
7. Dom: selector, event, props, 
8. let vs const, block scope
9. promise, async, await: dùng để xử lý bất đồng bộ api, (đợi đoạn này chạy xong rồi mới chạy tiếp) 
10. Higher order function: là hàm nhận hàm khác làm tham số hoặc trả về một hàm khác 
11. Destructure, String literal, ... 

























2. Các kiểu dữ liệu:
- Chuỗi kí tự, văn bản trong ngoặc kép 
- số không ngoặc kép 

- Có thể khai báo nhiều biến trong một câu lệnh, ngăn cách nhau bởi dấu phẩy 

- dấu = là toán tử gán, chứ không phải toán tử bằng 

3. const, không thể gán , gán lại giá trị cho một hằng số nhưng có thẻ thay đổi các thuộc tính của mảng, của đối tượng 

- 8 kiểu dữ liệu là: String, number, bigint, boolean, object, null, symbol, undefined 

- toán tử so sánh: == không bằng nhau (cùng type), === không bằng nhau (xét cả type và giá trị) 

- true, false viết thường 

- cả mảng rỗng [] và mảng đối tượng rỗng {} đều được coi là đúng, mọi đối tượng đều được đánh giá là true 

- việc so sánh 2 đối tượng luôn trả về false, không nên tạo các đối tượng kiểu boolean 

- Hãy lưu ý sự khác biệt giữa (x==y)và (x===y): so sánh lỏng lẻo, và so sánh nghiêm ngặt. code thực tế nên dùng === 

- chuỗi mẫu: dùng `` thay cho "", có thể chèn các biến vào chuỗi kí tự bằng ${firstName}, chèn các biểu thức ${} 

4. Các hàm javascript 
- hàm mũi tên trong javascript: cho phép cú pháp ngắn gọn hơn, có thể bỏ qua từ khóa function, return, và dấu ngoặc. Được dùng phổ biến trong js hiện đại. 

ex const add = (a, b) => {return a+b};

- hàm mũi tên với một tham số có thể bỏ qua dấu ngoặc đơn 
ex const add = x => x * x; 

- Hàm mũi tên (arrow function) và từ khóa this: không dùng arrow function để làm method trong object nếu cần dùng this. Hợp để dùng trong callback. 

5. Đối tượng 
- Khai báo đối tượng, có thể tạo một đối tượng rỗng rồi khai báo sau hoặc khai báo từ trước 
 const person = {}; 

- Có thể truy cập các thuộc tính đối tượng theo 2 cách: 
+ dấu chấm: obj.firstName; 
+ dấu ngoặc: obj["fristName"]; 

- trong js, đối tượng là vua. hiểu đối tượng hiểu js 

- Hàm khởi tạo đối tượng, viết hoa chữ cái đầu 
- tạo đối tượng thời gian trong java. new Date(), new Date(date String), new Date(year, month) ... 

- Đối tượng thời gian: có Temporal và Date, Temporal hiện đại hơn date, date tính này, tháng bắt đầu từ 0, còn tem.. thì từ 1. date có thể sửa trực tiếp, còn temp phải tạo object mới khi cộng trừ 

6. Mảng, chỉ số bắt đầu từ 0, kích thước động, có thể tăng, giảm khi các ptu thêm vào hoặc xóa đi

+ tạo mảng [] 
+ tạo set: new Set(["a", "b", "c"])
+ tạo map: new Map([]). thêm các thành phần bằng Map.set(); 


7. Gỡ lỗi 
- Bước 1: kiểm tra console.log() 
- Xác nhận các giả định. Kiểm tra giá trị, kiểm tra loại 
- thu nhỏ vấn đề, sửa từng vấn đề 1 
- gỡ lỗi mã bất đồng bộ là khó nhất, vì trôgn có vẻ đúng nhưng o có gì xảy ra 
- ví hàm fetch() không trả về dữ liệu ngay lập tức 

- js sử dụng 2 dấu cách để làm tab 

8. Quy tắc: vibe coding 
Luôn kết thúc một câu đơn giản bằng dấu chấm phẩy.


Đặt dấu ngoặc mở ở cuối dòng đầu tiên.
Hãy sử dụng một khoảng trắng trước dấu ngoặc mở.
Đặt dấu ngoặc đóng trên một dòng mới, không có khoảng trắng ở đầu.
Không nên kết thúc một câu phức tạp bằng dấu chấm phẩy.

Đặt dấu ngoặc mở trên cùng dòng với tên đối tượng.
Sử dụng dấu hai chấm cộng thêm một khoảng trắng giữa mỗi thuộc tính và giá trị của nó.
Hãy sử dụng dấu ngoặc kép cho các giá trị chuỗi, chứ không phải cho các giá trị số.
Không thêm dấu phẩy sau cặp thuộc tính-giá trị cuối cùng.
Đặt dấu ngoặc đóng trên một dòng mới, không có khoảng trắng ở đầu dòng.
Luôn kết thúc định nghĩa đối tượng bằng dấu chấm phẩy.
Hãy sử dụng tên tệp viết thường

Quy ước đặt tên
Luôn sử dụng cùng một quy ước đặt tên cho tất cả mã của bạn. Ví dụ:

Tên biến và hàm được viết theo kiểu camelCase.
Biến toàn cục được viết bằng CHỮ IN HOA (Chúng tôi không làm vậy, nhưng điều này khá phổ biến)
Hằng số (như PI) được viết bằng CHỮ IN HOA.

- trong json, các khóa phải là chuỗi kí tự được viết trong ngoặc kép 

9. jQuery: là thư viện viết bằng js để code ngắn hơn, dễ thao tác 
