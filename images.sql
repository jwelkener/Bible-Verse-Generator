-- Assuming you have a table named 'images'
CREATE TABLE images (
    id INT PRIMARY KEY,
    photographer TEXT,
    url TEXT
);

-- Inserting the image data
INSERT INTO images (id, photographer, url) VALUES
(1, 'Alexander Gray', 'https://drive.google.com/file/d/1fsPwh3SlDJ7x2vUVxdMWOUs5u4ypCvBC/view?usp=drive_link'),
(2, 'Annie Spratt', 'https://drive.google.com/file/d/1KtzvYdLu7osKdRiV2Hjomr5a4_VnlKO8/view?usp=drive_link'),
(3, 'Artur Luczka', 'https://drive.google.com/file/d/1g3cQ-NS0qvL785y2w-K_6lxno2euDpsM/view?usp=drive_link'),
(4, 'Daniel Leone', 'https://drive.google.com/file/d/1TcRJb75g2V2G2_AcHmZ7-JxzPnmmZLLE/view?usp=drive_link'),
(5, 'Dave Hoefler', 'https://drive.google.com/file/d/1Z7-aNi_-DaZ4ZGzMstuyH2gB-eeMZUr8/view?usp=drive_link'),
(6, 'David Marcu', 'https://drive.google.com/file/d/1nnWOwVyZVG8fm94T5LCRkIOJUMT5yJp2/view?usp=drive_link'),
(7, 'Davies Designs Studio', 'https://drive.google.com/file/d/1OgHSaycQvnFqmn_X-piX9JItK6XWZDmL/view?usp=drive_link'),
(8, 'Eberhard Grossgasteiger', 'https://drive.google.com/file/d/1Oe4m1uPbId9SxQEk1qUyvQ095Q5HJCtG/view?usp=drive_link'),
(9, 'Eberhard Grossgasteiger', 'https://drive.google.com/file/d/1QwBQe7qIcerJ3AMjnlF4ctBJo83pqPAg/view?usp=drive_link'),
(10, 'Goutham Krishna', 'https://drive.google.com/file/d/1H6a1OLhVvOiz8_uFWChtaPkFFPZkmlyp/view?usp=drive_link'),
(11, 'Guillaume Briard', 'https://drive.google.com/file/d/19kCX1xLT2l8m4GbOnhI5C0KePtb4XP4H/view?usp=drive_link'),
(12, 'J Lee', 'https://drive.google.com/file/d/1-HtAgz6XP55XayN1yYKoCuvbYoPEhHcj/view?usp=drive_link'),
(13, 'Janke Laskowski', 'https://drive.google.com/file/d/1rZttAhSd5HhEDB8vKSyLJFKvPzhsI4bo/view?usp=drive_link'),
(14, 'Jonatan Pie', 'https://drive.google.com/file/d/138nApkwfyAcIsU3stYc8TRX0rx86vTAh/view?usp=drive_link'),
(15, 'Mads Schmidt Rasmussen', 'https://drive.google.com/file/d/19hZ42MqFloy9Oza_LHhjBgAnUtAPqnKv/view?usp=drive_link');

COMMIT

