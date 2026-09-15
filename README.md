# 토크살롱 홈페이지 2026

기존 토크살롱 홈페이지 내용을 바탕으로 재구성한 **GitHub + Cloudflare Workers Static Assets**용 1차 버전입니다.

## 포함 페이지
- HOME
- 지식나눔문화원
- 토크살롱
- 시브아포럼
- 생본소협
- 영상자료
- 문의하기
- SHOP(준비중)

## GitHub 업로드
1. GitHub에서 새 저장소 생성
2. 이 폴더 안의 모든 파일을 저장소 최상위에 업로드
3. 커밋

## Cloudflare 연결
### 방법 A — Cloudflare Dashboard에서 GitHub 연동
1. Cloudflare Dashboard → Workers & Pages
2. Create application → Import a repository
3. GitHub 저장소 선택
4. Framework preset: None
5. Build command: 비워두기
6. Deploy command가 필요한 경우 `npx wrangler deploy`
7. Root directory: `/`

### 방법 B — 로컬/CLI
```bash
npm install
npm run dev
npm run deploy
```

## 콘텐츠 수정 방법
- 홈 최근 글: `public/data/posts.json`
- 초청패널: `public/data/panels.json`
- 이미지: `public/assets/images/`
- 전체 디자인: `public/assets/css/style.css`

## 다음 개발 단계
1. 문의폼 실제 저장/메일 전송
2. 게시판 관리자 기능
3. Cloudflare D1 연동
4. R2 이미지/첨부파일 저장
5. 회원/생본소협 신청 관리
6. SHOP 상품·장바구니·결제·주문관리

> 현재 문의폼은 데모이며 실제 전송은 되지 않습니다.
