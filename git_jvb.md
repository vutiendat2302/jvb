# Sự dụng các lệnh cơ bản với Git
1. Khởi tạo và Chia sẻ / Cập nhật dự án 
- git clone: tạo một bản sao (local) của một repo từ máy chủ từ xa 

- git fetch: Tải về các thông tin, thay đổi từ repo về máy cục bộ nhưng chưa gộp vào mã nguồn hiện tại 

- git pull: tải về và hợp nhất các thay đổi mới từ remote nhánh được theo dõi trực tiếp vào nhánh ở local 

- git push: đẩy các commit từ cục bộ lên git 

- git fetch: chỉ tải dữ liệu về máy để  kiểm tra, không làm thay đổi thư mục hiện tại. git pull thì vừa tải về vừa gộp luôn vào mã nguồn. Khi fetch: có thể dùng: 
    - git log, git diff: xem sự khác nhau 
    - git merge: gộp nhánh sau khi kiểm tra 
    - git pull = git fetch + git merge 

2. Xem trạng thái và lưu trữ cơ bản 

- git status: xem trạng thái của thư mục làm việc và khu vực staging (các file đã bị thay đổi) 

- git add: Thêm các file đã chỉnh sửa và khu vực chuẩn bị 

- git commit: ghi lại những thay đổi, có thể tùy chọn --amend để chỉnh sửa cập nhật lại nội dung commmit gần nhất (trước đó đã commit r, nhưng chưa push, h muốn commit lại thì sẽ dùng --amend) 

- git diff: Hiển thị chi tiết sự khác nhau giữa các file đã chỉnh sửa hoặc giữa các commit, các nhánh 

- git log: hiển thị lịch sử các commit cho nhánh hiện tại 

3. Làm việc với Nhánh 
- git branch: Liệt kê các nhánh, tạo nhánh mới, đổi tên, xóa nhánh 

- git checkout: Chuyển nhánh , git checkout -b tạo mới và chuyển sang nhánh đó ngay lập tức 

- git rebase: Chuyển các commit của nhánh hiện tại lên trên các commit mới nhất của nhánh khác 

- git cherry-pick: Chọn lấy một commit cụ thể, từ một nhánh khác và áp dụng thay đổi đó vào nhánh hiện tại 


4. Lưu trữ tạm và dọn dẹp 
- git stash: Cho phép tạp thời các thay đổi cục bộ (chưa commit) và đưa thu mục làm việc quay trở lại trạng thái sạch sẽ. Dùng git stash pop để khôi phục lại các thay đổi này. 

- git clean: Xóa các tệp và thư mục con chưa được theo dõi ra khỏi thư mục làm việc 

5. Hoàn tác và chỉnh sửa lại lịch sử 
- git reset: có 2 kiểu là quay lại, nhánh đấy vẫn còn lưu trữ trong lịch sử, hoặc quay ngược và xóaa sạch thay đổi 

- git revert: tạo commit mới để đảo ngược, hoàn tác commit cũ 

# Quy trình làm việc với Git
1. Develop mới nhất
2. Tạo branch mới từ develop theo task
3. Code task
4. Add, commit, push
5. pull request / merge request vào develop 
6. Request review code 
7. fix comment (nếu có)
8. review ok -> merge vào develop

