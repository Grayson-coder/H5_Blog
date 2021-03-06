/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : zhen_blog

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 29/12/2020 18:14:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 1, '邂逅Vue', 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。', '2020-12-29 15:55:24');
INSERT INTO `article` VALUES (2, 1, 'Node', '简单的说 Node.js 就是运行在服务端的 JavaScript。\n\nNode.js 是一个基于Chrome JavaScript 运行时建立的一个平台。\n\nNode.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。\n\n1.编写高性能网络服务器的javascript工具包（用js开发服务端程序）\n\n2.单线程、异步、事件驱动', '2020-12-29 15:59:52');
INSERT INTO `article` VALUES (4, 1, 'GIT', '我们在写代码的时候，肯定不是总一帆风顺的。\n\n自己的作品肯定要经过一个版本，一个版本的迭代。\n\n我们都会在每个版本完成后，都做一个备份。\n\n就像我们在玩单机游戏打BOSS之前，都会先存好档，方便打不过的时候，可以随时返回到原来的状态，再徐徐图之。\n\n但是如果这个备份只是简单的在电脑上复制一个文件夹的话，那么如果有很多版本就意味着要复制很多个文件夹，那你想想这要多少的空间来存储？？\n\n正所谓有需求就有服务。\n\ngit就是将这样的一个备份的过程程序化了。它会自动复制你的代码，让你可以随时回退到任何一个版本。', '2020-12-29 16:16:07');
INSERT INTO `article` VALUES (5, 1, '测试4', '测试45', '2020-12-29 16:16:14');
INSERT INTO `article` VALUES (6, 1, '测试5', '测试5', '2020-12-29 16:16:22');
INSERT INTO `article` VALUES (7, 1, '测试6', '测试6', '2020-12-29 16:16:32');
INSERT INTO `article` VALUES (8, 1, '我有一个梦想', '123213', '2020-12-29 17:57:55');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '$2a$10$3ZIZ2ajjm78UB2k1z6a.D.vohHLd3ewZXv7kHRwe/It3q5RRer0Pu');

SET FOREIGN_KEY_CHECKS = 1;
