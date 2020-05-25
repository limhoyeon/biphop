<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>BIPHOP</title><style>
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Songti TC", "Songti SC", "SimSun", "Nanum Myeongjo", NanumMyeongjo, Batang, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC', 'Noto Sans CJK KR'; }

.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC', 'Noto Sans Mono CJK KR'; }

.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Songti TC", "Songti SC", "SimSun", "Nanum Myeongjo", NanumMyeongjo, Batang, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC', 'Noto Sans CJK KR'; }

.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC', 'Noto Sans Mono CJK KR'; }

.highlight-default {
}
.highlight-gray {
	color: rgb(155,154,151);
}
.highlight-brown {
	color: rgb(100,71,58);
}
.highlight-orange {
	color: rgb(217,115,13);
}
.highlight-yellow {
	color: rgb(223,171,1);
}
.highlight-teal {
	color: rgb(15,123,108);
}
.highlight-blue {
	color: rgb(11,110,153);
}
.highlight-purple {
	color: rgb(105,64,165);
}
.highlight-pink {
	color: rgb(173,26,114);
}
.highlight-red {
	color: rgb(224,62,62);
}
.highlight-gray_background {
	background: rgb(235,236,237);
}
.highlight-brown_background {
	background: rgb(233,229,227);
}
.highlight-orange_background {
	background: rgb(250,235,221);
}
.highlight-yellow_background {
	background: rgb(251,243,219);
}
.highlight-teal_background {
	background: rgb(221,237,234);
}
.highlight-blue_background {
	background: rgb(221,235,241);
}
.highlight-purple_background {
	background: rgb(234,228,242);
}
.highlight-pink_background {
	background: rgb(244,223,235);
}
.highlight-red_background {
	background: rgb(251,228,228);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(55, 53, 47, 0.6);
	fill: rgba(55, 53, 47, 0.6);
}
.block-color-brown {
	color: rgb(100,71,58);
	fill: rgb(100,71,58);
}
.block-color-orange {
	color: rgb(217,115,13);
	fill: rgb(217,115,13);
}
.block-color-yellow {
	color: rgb(223,171,1);
	fill: rgb(223,171,1);
}
.block-color-teal {
	color: rgb(15,123,108);
	fill: rgb(15,123,108);
}
.block-color-blue {
	color: rgb(11,110,153);
	fill: rgb(11,110,153);
}
.block-color-purple {
	color: rgb(105,64,165);
	fill: rgb(105,64,165);
}
.block-color-pink {
	color: rgb(173,26,114);
	fill: rgb(173,26,114);
}
.block-color-red {
	color: rgb(224,62,62);
	fill: rgb(224,62,62);
}
.block-color-gray_background {
	background: rgb(235,236,237);
}
.block-color-brown_background {
	background: rgb(233,229,227);
}
.block-color-orange_background {
	background: rgb(250,235,221);
}
.block-color-yellow_background {
	background: rgb(251,243,219);
}
.block-color-teal_background {
	background: rgb(221,237,234);
}
.block-color-blue_background {
	background: rgb(221,235,241);
}
.block-color-purple_background {
	background: rgb(234,228,242);
}
.block-color-pink_background {
	background: rgb(244,223,235);
}
.block-color-red_background {
	background: rgb(251,228,228);
}
.select-value-color-default { background-color: rgba(206,205,202,0.5); }
.select-value-color-gray { background-color: rgba(155,154,151, 0.4); }
.select-value-color-brown { background-color: rgba(140,46,0,0.2); }
.select-value-color-orange { background-color: rgba(245,93,0,0.2); }
.select-value-color-yellow { background-color: rgba(233,168,0,0.2); }
.select-value-color-green { background-color: rgba(0,135,107,0.2); }
.select-value-color-blue { background-color: rgba(0,120,223,0.2); }
.select-value-color-purple { background-color: rgba(103,36,222,0.2); }
.select-value-color-pink { background-color: rgba(221,0,129,0.2); }
.select-value-color-red { background-color: rgba(255,0,26,0.2); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="fdebb1ff-5436-4eb8-be20-19c20b05aecc" class="page sans"><header><h1 class="page-title">BIPHOP</h1></header><div class="page-body"><p id="ac45a75b-6bd0-46c0-8730-a9027c96f158" class="">웹페이지를 재미로 만들면서 전체적인 웹서비스의 구조를 배우고자 시작한 개인 프로젝트입니다! 음악을 저장하고 공유하고 들을 수 있는 웹사이트이고, 프론트엔드는 vue.js를 이용하여 구현하였습니다. 템플릿을 이용하여 쉽게 만들고자 했으나 하다보니 결국 버튼 디자인과 아이콘 디자인을 제외하고 직접 만들게 되었습니다. 정보를 받을 api서버를 node.js로 구현하였습니다. 현재 로그인 로그아웃 기능과, 노래를 플레이리스트에 담아 하단의 노래 플레이어에서 들을 수 있는 기능이 구현되어 있습니다. collation을 깜박하고 db를 만들 때 설정하지 않아서 현재 한글을 입력을 못합니다. 외래키 때문에 테이블의 수정이 어려워서, 이후에 전체적으로 수정 예정입니다. 아직 프로젝트를 시작한지 얼마되지 않았고, 대부분의 기능이 구현되지는 않았지만, 전체적인 구조를 공부하기 위해 만든 것이기 때문에 좋게 봐주셨으면 좋겠습니다.</p><p id="02e37caa-b298-4c0c-b0cf-e22a32ed1cd5" class="">
</p><p id="4d716615-cdb5-4da1-9c71-25cfb188f8b5" class="">프론트 엔드 페이지입니다.</p><figure id="3720b835-a426-4cc5-9491-ad4274c4f48f"><a href="http://biphop-front.s3-website.ap-northeast-2.amazonaws.com/beat/list" class="bookmark source"><div class="bookmark-info"><div class="bookmark-text"><div class="bookmark-title"></div></div><div class="bookmark-href">http://biphop-front.s3-website.ap-northeast-2.amazonaws.com/beat/list</div></div></a></figure><ol id="29724b42-93b2-4980-9d28-61f1a830987f" class="numbered-list" start="1"><li>전체 설계<p id="e11f753e-c7ab-44c1-b06b-98faa76f697e" class=""> </p><p id="ad107d10-331d-4ef7-8e0a-0b2f3312ced3" class="">
</p><figure id="fe15e1b1-6a16-45f4-bf93-cb3be37b08ec" class="image"><a href="BIPHOP%20fe15e1b16a1645f4bf93cb3be37b08ec/Untitled_Diagram_(3).png"><img style="width:803px" src="BIPHOP%20fe15e1b16a1645f4bf93cb3be37b08ec/Untitled_Diagram_(3).png"/></a></figure><p id="6a7528cc-ee2d-4c24-b40a-a8dbca1ef24a" class="">
</p><ul id="89fa225e-6636-4855-908b-a3628057f3de" class="bulleted-list"><li>db는 아마존의 aws mysql 인스턴스를 사용하였고, mongo db도 사용할 예정이라 구축해놓고 연동 해놓았습니다. </li></ul><ul id="fd8e874c-5d63-4fb9-ab03-e63c89d8b9a4" class="bulleted-list"><li>redis는 따로 캐싱 서버를 두어야 하지만 자원이 제한적이라 api 서버를 담은 인스턴스안에 같이 놓았습니다.</li></ul><ul id="b5582e95-1ada-443f-916b-b3afc352ef48" class="bulleted-list"><li>보안을 위해 nginx를 이용해서 리버스 프록시 기능을 사용했습니다. 이후에 만약 인스턴스가 많아진다면 로드밸런싱 기능도 구현할 예정입니다.</li></ul><ul id="029c48ed-5866-466f-a1f2-c35b03a0fcf2" class="bulleted-list"><li>음악 데이터 등 정적 데이터 저장을 위해 s3 bucket을 사용하였습니다.</li></ul><p id="3acec938-9f39-4d6d-ba16-2df055e329d4" class="">2. 배포 방법</p><ul id="a479e54e-99e4-49fe-8d70-f6aa6e022a83" class="bulleted-list"><li>먼저 jenkins를 git repository와 연동합니다. master branch에서 push 이벤트가 발생하면 이 정보를 jenkins로 보내주도록 설정합니다.</li></ul><ul id="ec487d42-8e82-4579-a66e-03ff6a4f86c5" class="bulleted-list"><li>jenkins는 push이벤트를 받으면, 충돌을 피하기 위해 pm2 인스턴스를 중지한 뒤, 모든 소스코드를 삭제합니다. 그리고, 다시 git repository를 clone해서 업데이트된 소스코드를 불러옵니다.</li></ul><ul id="db70409b-3f35-4262-827f-74ac4ccbaf97" class="bulleted-list"><li>그리고, npm install 등을 통해서 필요한 모듈들을 받아주고, pm2를 이용하여 백엔드 api서버를 오픈합니다. node를 실행할 때, cpu 개수에 맞는 cluster를 사용하는 설정을 두었고, 이후에 실제로 서비스가 어느정도 완성되었을 때 여러가지 test를 통해서 적절한 cluster 개수와 worker thread개수를 맞출 생각입니다.</li></ul><ul id="acf3bd3d-117b-476c-9737-665defadb5f1" class="bulleted-list"><li>그 후에, frontend 소스코드를 build합니다. cli 명령어를 통해 s3 bucket중에서 정적 웹 호스팅을 맡고 있는 s3 bucket의 내용을 모두 제거하고, 업데이트된 build파일을 다시 업로드함으로써 vue.js 파일을 배포하게 됩니다.</li></ul><ul id="dfb2d6ec-f523-4bc7-9bab-bb11275d512f" class="bulleted-list"><li>또한 cloud front에 해당 파일을 캐싱함으로써 사용자가 조금 더 빠르게 웹페이지에 접근할 수 있도록 도움을 줍니다.</li></ul><p id="387bfdfd-75c5-4662-b84c-6fd14033e9c1" class="">3. 개발된 기능</p><ul id="40b04cc3-1ef1-4022-9f18-cd4d21d5c148" class="bulleted-list"><li>jwt 토큰을 이용하여 로그인 및 회원가입 기능을 구현하였습니다. 프론트엔드의 로그인 토큰은 vuex에 저장하도록 했습니다.</li></ul><ul id="d209b5af-456f-411f-8068-d78a2fb6bb94" class="bulleted-list"><li>최근에 추가된 음악을 보여주는 기능을 redis를 이용해 구현했습니다. 최근에 추가된 음악은 모든 유저가 보게 되어있고, 추가와 삭제가 빈번하기 때문입니다. 서버가 시작될 때, 데이터베이스에서 가장 최근에 추가된 음악을 정렬된 순서로 12개를 골라 유저에게 노출합니다. 만약 추가나 삭제가 일어났을 때는, 데이터베이스에 변경내용을 반영함과 동시에 redis에도 해당 내용을 반영했습니다. 데이터베이스에 내용을 쓰고 redis에 원래있던 내용을 날려버리고 다시 db에서 불러오면 나중에 많은 양의 데이터를 다룰 때 성능 저하가 올 것이라고 생각되어서, redis에도 따로 저장하고 database에도 따로 저장하도록 했습니다.</li></ul><ul id="eafc4aa3-ce2b-45b8-82e4-34be0a9f2fff" class="bulleted-list"><li>유저가 음악을 업로드하고 들을 수 있는 기능을 구현했습니다. 유저는 일단 api 서버에 요청을 보내서, 일시적으로 유효한 s3에 업로드 할 수 있는 주소를 받아옵니다. 그리고, 유저는 그 주소를 이용하여 서버를 거치지 않고 s3에 음악을 업로드하고, 음악이 저장된 s3 주소를 db에 저장합니다. 또한 이후에 유저가 음악을 들을 땐, db에서 해당 음악파일의 저장소 주소를 가지고 온 후, 서버를 거치지 않고 바로 브라우저에서 s3로부터 데이터를 받아오도록 했습니다.  </li></ul><ul id="232f3cc5-f5ed-4749-9008-c04469d5a275" class="bulleted-list"><li>유저의 최근 플레이리스트를 관리하는 기능을 구현했습니다. vuex로 유저의 플레이리스트를 관리하고, 유저가 음악을 플레이리스트에 추가하면, 플레이리스트에 음악을 추가함과 동시에 이후에 유저가 다시 접속했을 때 그 목록을 볼 수 있도록 db에도 해당 내용을 저장하도록 했습니다.</li></ul><p id="ace7a086-eb3e-4313-b95e-9e5a2f6360aa" class="">4. 이후 구현할 기능</p><ul id="d88467cb-292e-4dd2-b0b4-44753a281752" class="bulleted-list"><li>채팅 기능을 구현할 예정입니다. 채팅 정보를 mongodb에 저장하고, redis를 pub/sub를 위한 서버로 사용하고, 웹소켓을 이용해 구현할 예정입니다.</li></ul></li></ol></div></article></body></html>
