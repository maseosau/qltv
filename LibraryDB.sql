
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `librarydb`
--
CREATE DATABASE IF NOT EXISTS `librarydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `librarydb`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `isbn` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `language` varchar(64) NOT NULL,
  `state` int(11) NOT NULL COMMENT '1 = available\r\n2 = borrowed'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `book_lending`
--

CREATE TABLE `book_lending` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `state` int(11) NOT NULL COMMENT '1 = barrowed 2 = returned'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `id_number` varchar(64) DEFAULT NULL,
  `id_type` varchar(64) NOT NULL,
  `birthday` date DEFAULT NULL,
  `gender` varchar(64) NOT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `full_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(64) NOT NULL,
  `nic` varchar(20) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_lending`
--
ALTER TABLE `book_lending`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `book_lending`
--
ALTER TABLE `book_lending`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Insert data
-- Insert user
INSERT INTO `users` (`full_name`, `user_name`, `password`, `role`, `nic`, `mail`, `address`) 
VALUES ('sau', 'seosau', 'b82a4ed4e5b37f92d9db11e5487443e8', 'user', '123', 'sau@gmail.com', 'HCM');

-- Insert books
-- INSERT INTO `books` (`id`, `name`, `author`, `description`, `category`, `isbn`, `language`, `state`) VALUES
-- (123, 'Người Đài Bắc', 'Bạch Tiến Dũng', '\"Bao gồm 14 truyện ngắn từng được đăng trên tờ Văn học hiện đại trong suốt thập niên 60 thế kỷ 20, lần đầu xuất bản vào năm 1971 song đến nay vẫn xếp thứ 7 trong danh sách 100 tiểu thuyết Hoa ngữ tiêu biểu thế kỷ 20, Người Đài Bắc là tác phẩm giữ thứ hạng cao nhất của một nhà văn còn tại thế trong danh sách này. \"'),
-- (124, 'Tật xấu người Việt', 'Di Li', '\"“Các cụ xưa nay vẫn cho rằng ở đời có ba việc lớn là cưới vợ, xây nhà, tậu trâu (trâu đây là sự nghiệp, vì nghiệp xưa của các cụ vốn gắn liền với trâu). Có người thì định nghĩa ‘Hạnh phúc là sáng muốn đi làm, chiều thì muốn về nhà.’ Đủ hiểu hạnh phúc hay bất hạnh ở đời cũng chỉ loanh quanh ba cái điều ấy thôi. \"'),
-- (125, 'Những lối đi dưới hàng cây tăm tối', 'Ivan Bunin', '.'),
-- (126, 'Nam Hoa Kinh', 'Trang Tử', '\"“Thầy Trang mặc áo vải to mà có chỗ vá, nối đai, buộc giày mà sang chơi vua nước Ngụy.\"'),
-- (127, 'Hội hè miên man', 'Ernest Hemingway', '.'),
-- (128, 'Đồi thỏ', 'Richard Adams', '.'),
-- (129, 'Trở lại Babylon tuyển tập truyện ngắn Anh - Mỹ', 'Ernest Hemingway', '\"Tuyển tập truyện ngắn của mười tên tuổi lớn trong nền văn học Anh - Mỹ, những người có thể coi là một đỉnh cao, tỏa bóng và để lại ảnh hưởng lên rất nhiều thế hệ nhà văn sau này:\"'),
-- (130, 'Biên niên ký Sao Hỏa', 'Ray Bradbury', '\"Dẫu được tôn vinh vào hàng kinh điển trong dòng sách khoa học viễn tưởng, khoa học lại mờ nhạt đến gần như vắng bóng trong Biên niên ký Sao Hỏa. Sao Hỏa, trong trí tưởng tượng của Bradbury những năm bốn mươi của thế kỷ hai mươi, không có gì giống với hành tinh lạnh lẽo khô khốc chúng ta biết tới ngày nay. Đó là một nơi có bầu khí quyển gần như Trái Đất, sinh sống một giống loài thông minh khá giống loài người. Đó là xứ sở của những rặng núi xanh lam, của những dòng kênh xanh lục, của những cây cột pha lê, của lớp bụi mờ phủ lên những thành phố tráng lệ đã chết. Sao Hỏa của Bradbury là một chốn của hy vọng, của ảo mộng và của ẩn dụ. Chính ở nơi đây, những kẻ xâm lược Trái Đất đã đến, tháo chạy khỏi một thế giới không tương lai đến một miền đất hứa, một giấc mơ Mỹ thứ hai. Người Trái Đất tràn lên Sao Hỏa, để rồi bị chính Sao Hỏa ru ngủ trong những tiện nghi thân quen lọc lừa, rù quến trong ánh hào quang còn sót lại của chủng loài bản địa cổ xưa đầy bí hiểm.\"'),
-- (131, 'Con Trai (phần thứ tư của Người truyền ký ức)', 'Lois Lowry', '\"Họ gọi cô là Claire Thủy Triều. Khi cô trôi dạt vào bờ biển của họ, chẳng ai biết rằng cô vừa trốn chạy khỏi một xã hội không sắc màu, không cảm xúc.\"'),
-- (132, 'Tiếng kèn thiên nga', 'E.B.White', '\"“Thiên nga thì phải vui tươi, không buồn bã; phong nhã, không vụng về; can trường, không hèn nhát.” Và nếu là thiên nga kèn, thì còn phải biết cất tiếng kêu \"'),
-- (133, 'Lời của Nietzsche cho người trẻ - Tập 2', 'Shiratori Haruhiko', '\"Trong làng triết học phương Tây, Nietzsche có lẽ là một trường hợp hiếm hoi không khiến cho người ta phải sợ hãi [vì trừu tượng] hay ngao ngán [vì kinh viện]. Cũng vậy ở Việt Nam, kể từ khi các tác phẩm của Nietzsche lần đầu xuất hiện, biết bao nhiêu thế hệ trẻ đã đọc và yêu mến ông, mang theo tư tưởng mãnh liệt và hân hoan của ông trong hành trang của đời mình, cùng với những tình yêu, hoài bão và đổ vỡ.\"'),
-- (134, 'Infinite Dendrogram 5 - Những người kết nối các khả năng', 'Kaidou Sakon', 'Vua Phá Hoại xông trận.'),
-- (135, 'Dám bị ghét', 'Kishimi Ichiro và Koga Fumitake', 'Các mối quan hệ xã hội thật'),
-- (136, 'Bác sĩ Jekyll và ông Hyde', 'Robert Louis Balfour Stevenson', ''),
-- (137, 'Romeo và Juliet', 'William Shakespeare', '\"“Ngày xưa, ở thành Verona tươi đẹp,\"'),
-- (138, 'Phương trình mầu nhiệm', 'Hal Elrod', '\"Thẳm sâu bên trong, chúng ta biết rằng bản thân mình không có giới hạn. Nhưng bộ não của chính chúng ta và thế giới xung quanh giam hãm chúng ta, để rồi chúng ta cứ mãi nhỏ bé hơn tầm vóc đáng có. Xung đột này dẫn đến nỗi bất hạnh, sự lo lắng đi đôi với cảm giác thường trực rằng thế giới ngoài kia có một thứ khác, cao xa hơn, dành cho mình. \"'),
-- (139, 'Nỗi niềm của thám tử Galileo', 'Higashino Keigo', 'Tôi không tha thứ cho kẻ lấy khoa học làm công cụ giết người. Tuyệt đối không!'),
-- (140, 'Chuyện tình hài lãng mạn không thể chê vào đâu 2', 'Daisuke Suzuki', '\"Kanaruzawa Sekai chết đi, thế giới được tái lập, và câu chuyện lại một lần nữa bắt đầu khi Sekai chuyển đến trường cấp ba nơi Kirishima Yuuki đang theo học. \"'),
-- (141, 'Giấc mơ tiên tri', 'Higashino Keigo', '\"Đêm khuya, một gã đàn ông lẻn vào phòng của thiếu nữ mười sáu tuổi. Người mẹ phát hiện và nổ súng. Khi bị bắt, gã đàn ông khai hắn đã mơ thấy mình trở thành chồng thiếu nữ này từ mười bảy năm về trước, bằng chứng là bài văn mô tả cô gái do hắn viết từ thời tiểu học. Lẽ nào người trong mơ lại xuất hiện ngoài đời thực? Đó chỉ là sự trùng hợp quá đỗi ngẫu nhiên, hay thực sự tồn tại giấc mơ tiên tri?\"'),
-- (142, 'Cuộc đời và số phận', 'Vasily Semyonovich Grossman', '\"Xoay quanh trận Stalingrad, trận chiến mang tính bước ngoặt trong Thế chiến Hai, Cuộc đời và Số phận muốn nắm bắt tinh thần của một thời đại bão tố mà nước Nga trải qua. Đó là một bức tranh mênh mông với đông đảo các nhân vật thuộc đủ mọi tầng lớp khiến sự chân thực của bức tranh ấy không chỉ đến những sự kiện lớn lao, những anh hùng thời đại quyết định vận mệnh của một dân tộc, mà còn đến từ những tình cảm, suy nghĩ nhỏ nhặt, những bi kịch tinh thần của mỗi cá nhân. \"');



-- Insert books
-- INSERT INTO `books` (`id`, `name`, `author`, `description`, `category`, `isbn`, `language`, `state`) VALUES
-- (123, 'Người Đài Bắc', 'Bạch Tiến Dũng', '\"Bao gồm 14 truyện ngắn từng được đăng trên tờ Văn học hiện đại trong suốt thập niên 60 thế kỷ 20, lần đầu xuất bản vào năm 1971 song đến nay vẫn xếp thứ 7 trong danh sách 100 tiểu thuyết Hoa ngữ tiêu biểu thế kỷ 20, Người Đài Bắc là tác phẩm giữ thứ hạng cao nhất của một nhà văn còn tại thế trong danh sách này. \"', 'Truyện ngắn', '9781234567890', 'Tiếng Việt', 1),
-- (124, 'Tật xấu người Việt', 'Di Li', '\"“Các cụ xưa nay vẫn cho rằng ở đời có ba việc lớn là cưới vợ, xây nhà, tậu trâu (trâu đây là sự nghiệp, vì nghiệp xưa của các cụ vốn gắn liền với trâu). Có người thì định nghĩa ‘Hạnh phúc là sáng muốn đi làm, chiều thì muốn về nhà.’ Đủ hiểu hạnh phúc hay bất hạnh ở đời cũng chỉ loanh quanh ba cái điều ấy thôi. \"', 'Truyện ngắn', '9782345678901', 'Tiếng Việt', 1),
-- (125, 'Những lối đi dưới hàng cây tăm tối', 'Ivan Bunin', '.', '', 9783456789012, 'Tiếng Nga', 1),
-- (126, 'Nam Hoa Kinh', 'Trang Tử', '\"“Thầy Trang mặc áo vải to mà có chỗ vá, nối đai, buộc giày mà sang chơi vua nước Ngụy.\"', 'Văn học Trung Quốc', '9784567890123', 'Tiếng Trung', 1),
-- (127, 'Hội hè miên man', 'Ernest Hemingway', '.', 'Văn học Mỹ', 9785678901234, 'Tiếng Anh', 1),
-- (128, 'Đồi thỏ', 'Richard Adams', '.', 'Văn học Anh', 9786789012345, 'Tiếng Anh', 1),
-- (129, 'Trở lại Babylon tuyển tập truyện ngắn Anh - Mỹ', 'Ernest Hemingway', '\"Tuyển tập truyện ngắn của mười tên tuổi lớn trong nền văn học Anh - Mỹ, những người có thể coi là một đỉnh cao, tỏa bóng và để lại ảnh hưởng lên rất nhiều thế hệ nhà văn sau này:\"', 'Văn học Anh', '9787890123456', 'Tiếng Anh', 1),
-- (130, 'Biên niên ký Sao Hỏa', 'Ray Bradbury', '\"Dẫu được tôn vinh vào hàng kinh điển trong dòng sách khoa học viễn tưởng, khoa học lại mờ nhạt đến gần như vắng bóng trong Biên niên ký Sao Hỏa. Sao Hỏa, trong trí tưởng tượng của Bradbury những năm bốn mươi của thế kỷ hai mươi, không có gì giống với hành tinh lạnh lẽo khô khốc chúng ta biết tới ngày nay. Đó là một nơi có bầu khí quyển gần như Trái Đất, sinh sống một giống loài thông minh khá giống loài người. Đó là xứ sở của những rặng núi xanh lam, của những dòng kênh xanh lục, của những cây cột pha lê, của lớp bụi mờ phủ lên những thành phố tráng lệ đã chết. Sao Hỏa của Bradbury là một chốn của hy vọng, của ảo mộng và của ẩn dụ. Chính ở nơi đây, những kẻ xâm lược Trái Đất đã đến, tháo chạy khỏi một thế giới không tương lai đến một miền đất hứa, một giấc mơ Mỹ thứ hai. Người Trái Đất tràn lên Sao Hỏa, để rồi bị chính Sao Hỏa ru ngủ trong những tiện nghi thân quen lọc lừa, rù quến trong ánh hào quang còn sót lại của chủng loài bản địa cổ xưa đầy bí hiểm.\"', 'Khoa học viễn tưởng', '9788901234567', 'Tiếng Anh', 1),
-- (131, 'Con Trai (phần thứ tư của Người truyền ký ức)', 'Lois Lowry', '\"Họ gọi cô là Claire Thủy Triều. Khi cô trôi dạt vào bờ biển của họ, chẳng ai biết rằng cô vừa trốn chạy khỏi một xã hội không sắc màu, không cảm xúc.\"', 'Tiểu thuyết giả tưởng', '9789012345678', 'Tiếng Anh', 1),
-- (132, 'Tiếng kèn thiên nga', 'E.B.White', '\"“Thiên nga thì phải vui tươi, không buồn bã; phong nhã, không vụng về; can trường, không hèn nhát.” Và nếu là thiên nga kèn, thì còn phải biết cất tiếng kêu \"', 'Truyện tranh', '9780123456789', 'Tiếng Anh', 1),
-- (133, 'Lời của Nietzsche cho người trẻ - Tập 2', 'Shiratori Haruhiko', '\"Trong làng triết học phương Tây, Nietzsche có lẽ là một trường hợp hiếm hoi không khiến cho người ta phải sợ hãi [vì trừu tượng] hay ngao ngán [vì kinh viện]. Cũng vậy ở Việt Nam, kể từ khi các tác phẩm của Nietzsche lần đầu xuất hiện, biết bao nhiêu thế hệ trẻ đã đọc và yêu mến ông, mang theo tư tưởng mãnh liệt và hân hoan của ông trong hành trang của đời mình, cùng với những tình yêu, hoài bão và đổ vỡ.\"', 'Triết học', '9781234567890', 'Tiếng Việt', 1),
-- (134, 'Infinite Dendrogram 5 - Những người kết nối các khả năng', 'Kaidou Sakon', 'Vua Phá Hoại xông trận.', 'Tiểu thuyết giả tưởng', '9782345678901', 'Tiếng Nhật', 1),
-- (135, 'Dám bị ghét', 'Kishimi Ichiro và Koga Fumitake', 'Các mối quan hệ xã hội thật', 'Tâm lý học', '9783456789012', 'Tiếng Nhật', 1),
-- (136, 'Bác sĩ Jekyll và ông Hyde', 'Robert Louis Balfour Stevenson', '', 'Kinh điển', 9784567890123, 'Tiếng Anh', 1),
-- (137, 'Romeo và Juliet', 'William Shakespeare', '\"“Ngày xưa, ở thành Verona tươi đẹp,\"', 'Kinh điển', 9785678901234, 'Tiếng Anh', 1),
-- (138, 'Phương trình mầu nhiệm', 'Hal Elrod', '\"Thẳm sâu bên trong, chúng ta biết rằng bản thân mình không có giới hạn. Nhưng bộ não của chính chúng ta và thế giới xung quanh giam hãm chúng ta, để rồi chúng ta cứ mãi nhỏ bé hơn tầm vóc đáng có. Xung đột này dẫn đến nỗi bất hạnh, sự lo lắng đi đôi với cảm giác thường trực rằng thế giới ngoài kia có một thứ khác, cao xa hơn, dành cho mình. \"', 'Tâm lý học', 9786789012345, 'Tiếng Anh', 1),
-- (139, 'Nỗi niềm của thám tử Galileo', 'Higashino Keigo', 'Tôi không tha thứ cho kẻ lấy khoa học làm công cụ giết người. Tuyệt đối không!', 'Hình sự', 9787890123456, 'Tiếng Nhật', 1),
-- (140, 'Chuyện tình hài lãng mạn không thể chê vào đâu 2', 'Daisuke Suzuki', '\"Kanaruzawa Sekai chết đi, thế giới được tái lập, và câu chuyện lại một lần nữa bắt đầu khi Sekai chuyển đến trường cấp ba nơi Kirishima Yuuki đang theo học. \"', 'Ngôn tình', '9788901234567', 'Tiếng Nhật', 1),
-- (141, 'Giấc mơ tiên tri', 'Higashino Keigo', '\"Đêm khuya, một gã đàn ông lẻn vào phòng của thiếu nữ mười sáu tuổi. Người mẹ phát hiện và nổ súng. Khi bị bắt, gã đàn ông khai hắn đã mơ thấy mình trở thành chồng thiếu nữ này từ mười bảy năm về trước, bằng chứng là bài văn mô tả cô gái do hắn viết từ thời tiểu học. Lẽ nào người trong mơ lại xuất hiện ngoài đời thực? Đó chỉ là sự trùng hợp quá đỗi ngẫu nhiên, hay thực sự tồn tại giấc mơ tiên tri?\"', 'Hình sự', '9789012345678', 'Tiếng Nhật', 1),
-- (142, 'Cuộc đời và số phận', 'Vasily Semyonovich Grossman', '\"Xoay quanh trận Stalingrad, trận chiến mang tính bước ngoặt trong Thế chiến Hai, Cuộc đời và Số phận muốn nắm bắt tinh thần của một thời đại bão tố mà nước Nga trải qua. Đó là một bức tranh mênh mông với đông đảo các nhân vật thuộc đủ mọi tầng lớp khiến sự chân thực của bức tranh ấy không chỉ đến những sự kiện lớn lao, những anh hùng thời đại quyết định vận mệnh của một dân tộc, mà còn đến từ những tình cảm, suy nghĩ nhỏ nhặt, những bi kịch tinh thần của mỗi cá nhân. \"', 'Văn học', '9780143039944', 'Tiếng Việt', 1);


-- INSERT INTO `books` (`id`, `name`, `author`, `description`, `category`, `isbn`, `language`, `state`) VALUES
-- (123, 'Nguoi Dai Bac', 'Bach Tien Dung', 'Bao gom 14 truyen ngan dang tren to Van hoc hien dai thap nien 60 the ky 20, xuat ban nam 1971, van xep thu 7 trong danh sach 100 tieu thuyet Hoa ngu.', 'Truyen ngan', 9781234567890, 'Tieng Viet', 1),
-- (124, 'Tat xau nguoi Viet', 'Di Li', 'Cac cu xua nay van cho rang o doi co ba viec lon: cuoi vo, xay nha, tau trau. Hanh phuc la sang muon di lam, chieu muon ve nha. Hanh phuc hay bat hanh chi loanh quanh ba dieu ay thoi.', 'Truyen ngan', 9782345678901, 'Tieng Viet', 1),
-- (125, 'Nhung loi di duoi hang cay tam toi', 'Ivan Bunin', '.', '', 9783456789012, 'Tieng Nga', 1),
-- (126, 'Nam Hoa Kinh', 'Trang Tu', 'Thay Trang mac ao vai to ma co cho va, noi dai, buoc giay ma sang choi vua nuoc Nguy.', 'Van hoc Trung Quoc', 9784567890123, 'Tieng Trung', 1),
-- (127, 'Hoi he mien man', 'Ernest Hemingway', '.', 'Van hoc My', 9785678901234, 'Tieng Anh', 1),
-- (128, 'Doi tho', 'Richard Adams', '.', 'Van hoc Anh', 9786789012345, 'Tieng Anh', 1),
-- (129, 'Tro lai Babylon tuyen tap truyen ngan Anh - My', 'Ernest Hemingway', 'Tuyen tap truyen ngan cua muoi ten tuoi lon trong nen van hoc Anh - My, de lai anh huong len nhieu the he nha van sau nay.', 'Van hoc Anh', 9787890123456, 'Tieng Anh', 1),
-- (130, 'Bien nhien ky Sao Hoa', 'Ray Bradbury', 'Dau duoc ton vinh trong dong sach khoa hoc vien tuong, Sao Hoa cua Bradbury la mot chon cua hy vong, cua ao mong va cua an du.', 'Khoa hoc vien tuong', 9788901234567, 'Tieng Anh', 1),
-- (131, 'Con Trai (phan thu tu cua Nguoi truyen ky uc)', 'Lois Lowry', 'Claire Thuy Trieu troi dat vao bo bien, tron chay khoi xa hoi khong sac mau, khong cam xuc.', 'Tieu thuyet gia tuong', 9789012345678, 'Tieng Anh', 1),
-- (132, 'Tieng ken thien nga', 'E.B.White', 'Thien nga thi phai vui tuoi, khong buon ba; phong nha, khong vung ve; can truong, khong hen nhat. Neu la thien nga ken, thi con phai biet cat tieng keu.', 'Truyen tranh', 9780123456789, 'Tieng Anh', 1),
-- (133, 'Loi cua Nietzsche cho nguoi tre - Tap 2', 'Shiratori Haruhiko', 'Trong lang triet hoc phuong Tay, Nietzsche la mot truong hop hiem hoi khong khiem cho nguoi ta phai so hai hay ngao ngan. Tu tuong manh liet va han hoan cua ong de lai anh huong trong hanh trang cua doi minh.', 'Triet hoc', 9781234567890, 'Tieng Viet', 1),
-- (134, 'Infinite Dendrogram 5 - Nhung nguoi ket noi cac kha nang', 'Kaidou Sakon', 'Vua Pha Hoai xong tran.', 'Tieu thuyet gia tuong', 9782345678901, 'Tieng Nhat', 1),
-- (135, 'Dam bi ghet', 'Kishimi Ichiro va Koga Fumitake', 'Moi quan he xa hoi that', 'Tam ly hoc', 9783456789012, 'Tieng Nhat', 1),
-- (136, 'Bac si Jekyll va ong Hyde', 'Robert Louis Balfour Stevenson', '', 'Kinh dien', 9784567890123, 'Tieng Anh', 1),
-- (137, 'Romeo va Juliet', 'William Shakespeare', 'Ngay xua, o thanh Verona tuoi dep.', 'Kinh dien', 9785678901234, 'Tieng Anh', 1),
-- (138, 'Phuong trinh mau niem', 'Hal Elrod', 'Chung ta biet rang ban than minh khong co gioi han. Bo nao cua chung ta va the gioi xung quanh giam ham chung ta, de roi chung ta cu mai nho be hon tam voc dang co.', 'Tam ly hoc', 9786789012345, 'Tieng Anh', 1),
-- (139, 'Noi niem cua tham tu Galileo', 'Higashino Keigo', 'Toi khong tha thu cho ke lay khoa hoc lam cong cu giet nguoi. Tuyet doi khong!', 'Hinh su', 9787890123456, 'Tieng Nhat', 1),
-- (140, 'Chuyen tinh hai lang man khong the che vao dau 2', 'Daisuke Suzuki', 'Kanaruzawa Sekai chet di, the gioi duoc tai lap, va cau chuyen bat dau khi Sekai chuyen den truong cap ba noi Kirishima Yuuki dang theo hoc.', 'Ngon tinh', 9788901234567, 'Tieng Nhat', 1),
-- (141, 'Giac mo tien tri', 'Higashino Keigo', 'Dem khuya, mot ga dan ong len vao phong cua thieu nu muoi sau tuoi. Khi bi bat, ga dan ong khai han da mo thay minh tro thanh chong thieu nu nay tu muoi bay nam ve truoc, bang chung la bai van mo ta co gai do ma han viet tu thoi tieu hoc.', 'Hinh su', 9789012345678, 'Tieng Nhat', 1),
-- (142, 'Cuoc doi va so phan', 'Vasily Semyonovich Grossman', 'Xoay quanh tran Stalingrad, tran chien mang tinh buoc ngat trong The chien Hai, Cuoc doi va So phan nam bat tinh than cua mot thoi dai bao to ma nuoc Nga trai qua.', 'Van hoc', 9780143039944, 'Tieng Viet', 1);

INSERT INTO `books` (`id`, `name`, `author`, `description`, `category`, `isbn`, `language`, `state`) VALUES
(123, 'Nguoi Dai Bac', 'Bach Tien Dung', 'Bao gom 14 truyen ngan dang tren to Van hoc hien dai thap nien 60 the ky 20, xuat ban nam 1971, van xep thu 7 trong danh sach 100 tieu thuyet Hoa ngu.', 'Truyen ngan', 97812, 'Tieng Viet', 1),
(124, 'Tat xau nguoi Viet', 'Di Li', 'Cac cu xua nay van cho rang o doi co ba viec lon: cuoi vo, xay nha, tau trau. Hanh phuc la sang muon di lam, chieu muon ve nha. Hanh phuc hay bat hanh chi loanh quanh ba dieu ay thoi.', 'Truyen ngan', 97823, 'Tieng Viet', 1),
(125, 'Nhung loi di duoi hang cay tam toi', 'Ivan Bunin', '.', '', 97834, 'Tieng Nga', 1),
(126, 'Nam Hoa Kinh', 'Trang Tu', 'Thay Trang mac ao vai to ma co cho va, noi dai, buoc giay ma sang choi vua nuoc Nguy.', 'Van hoc Trung Quoc', 97845, 'Tieng Trung', 1),
(127, 'Hoi he mien man', 'Ernest Hemingway', '.', 'Van hoc My', 97856, 'Tieng Anh', 1),
(128, 'Doi tho', 'Richard Adams', '.', 'Van hoc Anh', 97867, 'Tieng Anh', 1),
(129, 'Tro lai Babylon tuyen tap truyen ngan Anh - My', 'Ernest Hemingway', 'Tuyen tap truyen ngan cua muoi ten tuoi lon trong nen van hoc Anh - My, de lai anh huong len nhieu the he nha van sau nay.', 'Van hoc Anh', 97878, 'Tieng Anh', 1),
(130, 'Bien nhien ky Sao Hoa', 'Ray Bradbury', 'Dau duoc ton vinh trong dong sach khoa hoc vien tuong, Sao Hoa cua Bradbury la mot chon cua hy vong, cua ao mong va cua an du.', 'Khoa hoc vien tuong', 97889, 'Tieng Anh', 1),
(131, 'Con Trai (phan thu tu cua Nguoi truyen ky uc)', 'Lois Lowry', 'Claire Thuy Trieu troi dat vao bo bien, tron chay khoi xa hoi khong sac mau, khong cam xuc.', 'Tieu thuyet gia tuong', 97890, 'Tieng Anh', 1),
(132, 'Tieng ken thien nga', 'E.B.White', 'Thien nga thi phai vui tuoi, khong buon ba; phong nha, khong vung ve; can truong, khong hen nhat. Neu la thien nga ken, thi con phai biet cat tieng keu.', 'Truyen tranh', 97801, 'Tieng Anh', 1),
(133, 'Loi cua Nietzsche cho nguoi tre - Tap 2', 'Shiratori Haruhiko', 'Trong lang triet hoc phuong Tay, Nietzsche la mot truong hop hiem hoi khong khiem cho nguoi ta phai so hai hay ngao ngan. Tu tuong manh liet va han hoan cua ong de lai anh huong trong hanh trang cua doi minh.', 'Triet hoc', 97812, 'Tieng Viet', 1),
(134, 'Infinite Dendrogram 5 - Nhung nguoi ket noi cac kha nang', 'Kaidou Sakon', 'Vua Pha Hoai xong tran.', 'Tieu thuyet gia tuong', 97823, 'Tieng Nhat', 1),
(135, 'Dam bi ghet', 'Kishimi Ichiro va Koga Fumitake', 'Moi quan he xa hoi that', 'Tam ly hoc', 97834, 'Tieng Nhat', 1),
(136, 'Bac si Jekyll va ong Hyde', 'Robert Louis Balfour Stevenson', '', 'Kinh dien', 97845, 'Tieng Anh', 1),
(137, 'Romeo va Juliet', 'William Shakespeare', 'Ngay xua, o thanh Verona tuoi dep.', 'Kinh dien', 97856, 'Tieng Anh', 1),
(138, 'Phuong trinh mau niem', 'Hal Elrod', 'Chung ta biet rang ban than minh khong co gioi han. Bo nao cua chung ta va the gioi xung quanh giam ham chung ta, de roi chung ta cu mai nho be hon tam voc dang co.', 'Tam ly hoc', 97867, 'Tieng Anh', 1),
(139, 'Noi niem cua tham tu Galileo', 'Higashino Keigo', 'Toi khong tha thu cho ke lay khoa hoc lam cong cu giet nguoi. Tuyet doi khong!', 'Hinh su', 97878, 'Tieng Nhat', 1),
(140, 'Chuyen tinh hai lang man khong the che vao dau 2', 'Daisuke Suzuki', 'Kanaruzawa Sekai chet di, the gioi duoc tai lap, va cau chuyen bat dau khi Sekai chuyen den truong cap ba noi Kirishima Yuuki dang theo hoc.', 'Ngon tinh', 97889, 'Tieng Nhat', 1),
(141, 'Giac mo tien tri', 'Higashino Keigo', 'Dem khuya, mot ga dan ong len vao phong cua thieu nu muoi sau tuoi. Khi bi bat, ga dan ong khai han da mo thay minh tro thanh chong thieu nu nay tu muoi bay nam ve truoc, bang chung la bai van mo ta co gai do ma han viet tu thoi tieu hoc.', 'Hinh su', 97890, 'Tieng Nhat', 1),
(142, 'Cuoc doi va so phan', 'Vasily Semyonovich Grossman', 'Xoay quanh tran Stalingrad, tran chien mang tinh buoc ngat trong The chien Hai, Cuoc doi va So phan nam bat tinh than cua mot thoi dai bao to ma nuoc Nga trai qua.', 'Van hoc', 97801, 'Tieng Viet', 1);
