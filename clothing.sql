/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.24 : Database - clothing
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`clothing` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `clothing`;

/*Table structure for table `banner` */

DROP TABLE IF EXISTS `banner`;

CREATE TABLE `banner` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `b_imgSrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`b_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `banner` */

insert  into `banner`(`b_id`,`b_imgSrc`) values (1,'/images/l1.png'),(2,'/images/c1.png'),(3,'/images/w1.png'),(5,'/images/z1.png'),(7,'/images/b1.png');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `w_id` int NOT NULL,
  `num` int NOT NULL,
  PRIMARY KEY (`c_id`) USING BTREE,
  KEY `w_id` (`w_id`) USING BTREE,
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`w_id`) REFERENCES `wares` (`w_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `cart` */

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `n_id` int NOT NULL AUTO_INCREMENT,
  `n_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `n_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `n_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`n_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `news` */

insert  into `news`(`n_id`,`n_title`,`n_detail`,`n_date`) values (1,'交易物流','您的订单正在派送','2021-09-02 10:38:52'),(2,'商品号消息','三只松鼠：小鹿蓝蓝同名动画上映了','2021-09-02 14:10:22'),(3,'活动优惠','2021夏季新款8.8折','2021-09-02 18:00:00');

/*Table structure for table `shoporder` */

DROP TABLE IF EXISTS `shoporder`;

CREATE TABLE `shoporder` (
  `o_id` int NOT NULL AUTO_INCREMENT,
  `w_id` int NOT NULL,
  `num` int DEFAULT NULL,
  PRIMARY KEY (`o_id`) USING BTREE,
  KEY `w_id` (`w_id`) USING BTREE,
  CONSTRAINT `shoporder_ibfk_1` FOREIGN KEY (`w_id`) REFERENCES `wares` (`w_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `shoporder` */

/*Table structure for table `sort` */

DROP TABLE IF EXISTS `sort`;

CREATE TABLE `sort` (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `s_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`s_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `sort` */

insert  into `sort`(`s_id`,`s_name`) values (1,'连衣裙'),(2,'衬衫'),(3,'卫衣'),(4,'T恤'),(5,'针织衫'),(6,'牛仔裤'),(7,'半身裙'),(8,'外套');

/*Table structure for table `wares` */

DROP TABLE IF EXISTS `wares`;

CREATE TABLE `wares` (
  `w_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `w_imgSrc` varchar(255) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `s_id` int NOT NULL,
  PRIMARY KEY (`w_id`) USING BTREE,
  KEY `s_id` (`s_id`) USING BTREE,
  CONSTRAINT `wares_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `sort` (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `wares` */

insert  into `wares`(`w_id`,`title`,`w_imgSrc`,`price`,`s_id`) values (1,'2021夏季雪纺碎花收腰裙子一字肩度假沙滩连衣裙女（含腰带）','/images/l2.png',78.00,1),(2,'纯棉收腰性感低领露锁骨连衣裙2021新款女裙子','/images/l1.png',86.00,1),(3,'2021新款】娃娃领显瘦减龄春季新款连衣裙','/images/l3.png',75.00,1),(4,'碎花连衣裙女2021年夏季新款高腰修身网纱短袖方领薄款裙子','/images/l4.png',199.00,1),(5,'2021秋季新品复古简约蝴蝶结珠链纯色长袖衬衫\r\n','/images/c1.png',279.00,2),(6,'2021新款韩范简约通勤休闲百搭拼接雪纺纯色显瘦翻领衬衫女','/images/c2.png',69.00,2),(7,'【优质新疆棉】新品春新疆棉潮流时尚韩版休闲宽松衬衫女','/images/c3.png',97.00,2),(8,'【2021夏季新品】小清新休闲小翻领系带撞色雪纺衫女','/images/c4.png',152.00,2),(9,'女款韩版彩虹字母印花上衣百搭圆领套头长袖卫衣女','/images/w1.png',79.00,3),(10,'2021年新款短款卫衣女春秋长袖t恤上衣女卫衣拉链立领舒适','/images/w2.png',69.00,3),(11,'韩版2021春装春秋季时尚运动百搭宽松长袖女士女式卫衣外套上','/images/w3.png',142.00,3),(12,'21夏新款女士青春街头风纯棉舒适字母短款复古印花短袖女式T恤','/images/t1.png',82.00,4),(13,'2021年新款小清新落肩t恤女式t恤圆领简约印花短袖女夏上衣','/images/t2.png',39.00,4),(14,'2021夏季新款青少年圆领短袖女夏上衣印花白色t恤女式t恤','/images/t3.png',38.00,4),(15,'2021夏季新款圆领撞色短袖女夏上衣学院风打底衫女式t恤','/images/t4.png',29.00,4),(16,'2021夏季新款圆领撞色短袖女夏上衣学院风打底衫女式t恤','/images/w4.png',159.00,3),(17,'针织开衫外套女2021秋新款毛衣外搭长袖针织空调衫薄款针织衫','/images/z1.png',113.00,5),(18,'针织开衫外套女秋装新款长袖镂空薄款长袖空调衫学院风休闲小衫女','/images/z2.png',133.00,5),(19,'秋冬慵懒风落肩设计感袖口翻折中长款口袋百搭针织开衫外套女','/images/z3.png',109.00,5),(20,'韩版冬装加厚宽松针织衫毛衣女式女士秋冬季打底衫内搭外穿潮','/images/z4.png',108.00,5),(21,'【大直筒清爽蓝】2021春季新品休闲时尚女款宽松牛仔裤','/images/n1.png',76.00,6),(22,'牛仔短裤女夏季薄款宽松显瘦直筒牛仔裤a字五分裤阔腿休闲牛仔裤','/images/n2.png',79.00,6),(23,'高腰直筒牛仔裤女秋款简约翻边百搭弹力修身显瘦九分烟管裤子女','/images/n3.png',96.00,6),(24,'【显瘦显高】时尚纯色宽松直筒高腰阔腿裤女简约百搭拖地裤子女装','/images/n4.png',107.00,6),(25,'【Hello Kitty联名】2021春季新款牛仔半身裙','/images/b1.png',159.00,7),(26,'2021春夏新品不规则洋气半裙高腰淑女风牛仔半身裙','/images/b2.png',82.00,7),(27,'新品显瘦时尚百褶裙气质百搭网纱A字裙中长款半身裙女蕾丝裙子','/images/b3.png',79.00,7),(28,'【高腰碎花不规则裙子】2021夏装新款修身显瘦半身裙女中长款','/images/b4.png',99.00,7),(29,'韩版2021春装春秋季长袖宽松针织衫开衫女式女士毛衣外套上衣','/images/o1.png',128.00,8),(30,'2021针织开衫外套女新款韩版中长款纯色宽松气质百搭开衫外套','/images/o2.png',119.00,8),(31,'牛仔外套女2021年春季新款史努比IP袖子拼接时尚复古上衣','/images/o3.png',148.00,8);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
