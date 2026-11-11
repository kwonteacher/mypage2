import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Building2,
  Landmark,
  BookOpenCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// framer-motion 애니메이션 프리셋 (부드러운 상승 진입)
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function App() {
  // 강의 주제 목록 (알약 모양 꼬리표)
  const topics = [
    "생성형 AI 입문",
    "바이브코딩",
    "프롬프트 작성법",
    "AI 업무 자동화",
    "AI 영상 제작",
    "GEO 마케팅",
    "AI 리터러시",
  ];

  // 출강 기관 롤링 리스트 (무한 롤링 띠)
  const clientList = [
    "삼성전기",
    "현대자동차",
    "LG유플러스",
    "포스코",
    "한국전력",
    "한국가스공사",
    "질병관리청",
    "도로교통공단",
  ];

  // 걸어온 길 (타임라인)
  const timelineData = [
    {
      period: "현재",
      title: "휴먼AI연구소 대표",
      desc: "생성형 AI 교육 프로그램 기획 및 실무 중심 AI 연구 활동 총괄",
      highlight: true,
    },
    {
      period: "2025",
      title: "생성형 AI 강사 대상 공공기관 강의 부문 수상",
      desc: "탁월한 강의 전달력과 현장 적용 성과를 인정받아 대상 수상",
      highlight: true,
    },
    {
      period: "2025",
      title: "생성형 AI 강사로 전환",
      desc: "기술의 최전선에서 기업과 대중을 잇는 전문 강사로의 본격적인 도약",
      highlight: false,
    },
    {
      period: "연구원",
      title: "한화큐셀 연구원",
      desc: "첨단 산업 분야 기술 연구 및 하드웨어·소프트웨어 엔지니어링 수행",
      highlight: false,
    },
    {
      period: "학업",
      title: "세종대학교 전자공학 학사·석사",
      desc: "공학적 원리와 데이터 구조에 대한 깊이 있는 학술적 기반 마련",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#E8EAE9] font-sans selection:bg-[#D4F56C] selection:text-[#0B0D0E] overflow-x-hidden relative">
      {/* 은은한 배경 격자 패턴 & 라임 앰비언트 글로우 */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-[#D4F56C]/[0.045] blur-[140px] z-0 animate-pulse-slow" />
      <div className="pointer-events-none fixed top-1/2 right-[-200px] w-[500px] h-[500px] rounded-full bg-[#D4F56C]/[0.025] blur-[160px] z-0" />

      {/* 내비게이션 바 */}
      <header className="relative z-10 w-full border-b border-white/[0.06] backdrop-blur-md bg-[#0B0D0E]/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D4F56C] shadow-[0_0_12px_#D4F56C]" />
            <span className="font-black text-lg md:text-xl tracking-tight text-[#E8EAE9]">
              권티처
            </span>
            <span className="text-xs text-white/30 font-medium hidden sm:inline-block">
              /
            </span>
            <span className="text-xs text-[#9FA6A8] hidden sm:inline-block">
              휴먼AI연구소
            </span>
          </div>
          <a
            href="https://kwonteacher.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-bold text-[#E8EAE9] hover:text-[#D4F56C] transition-colors flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#D4F56C]/40"
          >
            kwonteacher.com
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4F56C]" />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* ========================================================
            가) 맨 위 (Hero Section)
            이름, 한 줄 소개, 그 아래 연락 버튼 하나
        ======================================================== */}
        <section className="pt-24 pb-28 md:pt-36 md:pb-40 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full flex flex-col items-start"
          >
            {/* 상단 뱃지 */}
            <motion.div variants={fadeInVariants} className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.12] bg-[#131618] text-xs md:text-sm text-[#9FA6A8]">
                <span className="w-2 h-2 rounded-full bg-[#D4F56C] animate-ping" />
                <span className="text-[#E8EAE9] font-medium">권혁용</span>
                <span className="text-white/20">|</span>
                <span className="text-[#D4F56C] font-semibold">AI강사 권티처</span>
                <span className="text-white/20">|</span>
                <span>휴먼AI연구소 대표</span>
              </div>
            </motion.div>

            {/* 초대형 타이포그래피 제목: 최소 2.5rem 이상 유지되며 화면 너비에 맞게 유동적 반응 */}
            <motion.h1
              variants={fadeInVariants}
              className="hero-title text-[#E8EAE9] mb-8 break-keep max-w-4xl"
            >
              AI를 처음 만나는 분들이{" "}
              <span className="text-[#D4F56C] inline-block">오늘 바로</span>{" "}
              써먹게 만듭니다
            </motion.h1>

            {/* 서브 문구 */}
            <motion.p
              variants={fadeInVariants}
              className="text-base sm:text-lg md:text-xl text-[#9FA6A8] max-w-2xl leading-relaxed mb-10 md:mb-12 break-keep"
            >
              어려운 기술 용어와 막연한 이론 대신, 실무 현장에 곧바로
              적용할 수 있는 가장 쉽고 직관적인 생성형 AI 교육을 제공합니다.
            </motion.p>

            {/* 연락 버튼 하나 */}
            <motion.div variants={fadeInVariants}>
              <a
                href="https://kwonteacher.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group bg-[#D4F56C] text-[#0B0D0E] font-black text-base md:text-lg px-8 md:px-10 h-14 md:h-16 rounded-full shadow-[0_0_30px_rgba(212,245,108,0.28)] hover:bg-[#C3E558] hover:shadow-[0_0_40px_rgba(212,245,108,0.45)] transition-all flex items-center gap-3"
                >
                  강의 및 협업 문의하기
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ========================================================
            마) 출강한 곳 (천천히 흘러가는 텍스트 띠 - Infinite Marquee)
        ======================================================== */}
        <section className="py-8 border-y border-white/[0.08] bg-[#0E1113] overflow-hidden select-none">
          <div className="max-w-6xl mx-auto px-6 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F56C]" />
            <p className="text-xs uppercase tracking-widest text-[#9FA6A8] font-bold">
              출강한 곳
            </p>
          </div>
          <div className="relative flex overflow-hidden">
            {/* 좌우 페이드 그라데이션 마스크 */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-[#0E1113] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-[#0E1113] to-transparent z-10" />

            {/* 좌측으로 부드럽게 흐르는 텍스트 */}
            <div className="animate-ticker flex items-center whitespace-nowrap">
              {[...clientList, ...clientList, ...clientList].map((client, idx) => (
                <div key={idx} className="flex items-center mx-5 md:mx-8">
                  <span className="text-lg md:text-2xl font-black text-[#E8EAE9]/85 tracking-tight hover:text-[#D4F56C] transition-colors cursor-default">
                    {client}
                  </span>
                  <span className="ml-5 md:ml-8 text-[#D4F56C]/40 text-sm font-bold">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            나) 하는 일 (Bento Grid 크기가 다른 세 가지 카드)
        ======================================================== */}
        <section className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariants}
            className="mb-14 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4F56C] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F56C]" />
              하는 일
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#E8EAE9] break-keep">
              실무 현장에 직접 적용되는 세 가지 영역
            </h2>
          </motion.div>

          {/* Bento Grid 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* 1. 기업 AI 교육 (md:col-span-7) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInVariants}
              className="md:col-span-7 flex"
            >
              <Card className="flex flex-col justify-between w-full relative overflow-hidden group hover:border-[#D4F56C]/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Building2 className="w-32 h-32 text-[#D4F56C]" />
                </div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#D4F56C] mb-4 group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#D4F56C]">01</span>
                    <span className="text-xs text-white/30">/</span>
                    <span className="text-xs text-[#9FA6A8]">Enterprise Training</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-black">
                    기업 AI 교육
                  </CardTitle>
                  <CardDescription className="text-base pt-2">
                    실제 비즈니스 환경에서 임직원이 인공지능을 직무에 즉시
                    접목할 수 있도록 실습형 커리큘럼을 제공합니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 pt-4">
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-xs font-bold text-[#9FA6A8] uppercase tracking-wider mb-3">
                      주요 고객사
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["삼성전기", "현대자동차", "LG유플러스", "포스코"].map(
                        (corp) => (
                          <span
                            key={corp}
                            className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#E8EAE9]"
                          >
                            {corp}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 2. 공공기관 AI 교육 (md:col-span-5) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInVariants}
              className="md:col-span-5 flex"
            >
              <Card className="flex flex-col justify-between w-full relative overflow-hidden group hover:border-[#D4F56C]/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Landmark className="w-28 h-28 text-[#D4F56C]" />
                </div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#D4F56C] mb-4 group-hover:scale-105 transition-transform">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#D4F56C]">02</span>
                    <span className="text-xs text-white/30">/</span>
                    <span className="text-xs text-[#9FA6A8]">Public Sector</span>
                  </div>
                  <CardTitle className="text-2xl font-black">
                    공공기관 AI 교육
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base pt-2">
                    공공 행정 업무 자동화와 대민 서비스 혁신을 이끄는 맞춤형 AI
                    리터러시 및 직무 역량 강화 교육을 진행합니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 pt-4">
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-xs font-bold text-[#9FA6A8] uppercase tracking-wider mb-3">
                      주요 출강 기관
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "한국전력",
                        "한국가스공사",
                        "질병관리청",
                        "도로교통공단",
                      ].map((gov) => (
                        <span
                          key={gov}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#E8EAE9]"
                        >
                          {gov}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 3. 연구와 집필 (md:col-span-12 와이드 카드) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInVariants}
              className="md:col-span-12"
            >
              <Card className="relative overflow-hidden group hover:border-[#D4F56C]/30 transition-all duration-300">
                <div className="absolute top-1/2 -translate-y-1/2 right-12 opacity-10 group-hover:opacity-20 transition-opacity hidden md:block">
                  <BookOpenCheck className="w-48 h-48 text-[#D4F56C]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                  <div className="p-6 md:p-10 md:col-span-8 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#D4F56C] mb-4 group-hover:scale-105 transition-transform">
                      <BookOpenCheck className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#D4F56C]">03</span>
                      <span className="text-xs text-white/30">/</span>
                      <span className="text-xs text-[#9FA6A8]">Research & Books</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#E8EAE9] mb-3">
                      연구와 집필
                    </h3>
                    <p className="text-sm md:text-base text-[#9FA6A8] leading-relaxed break-keep max-w-2xl mb-6">
                      새로운 인공지능 기술 트렌드를 끊임없이 연구하고, 누구나
                      쉽게 이해하고 적용할 수 있는 체계적인 도서와 전문 콘텐츠로
                      세상과 소통합니다.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <span className="w-2 h-2 rounded-full bg-[#D4F56C]" />
                        <span className="text-sm font-bold text-[#E8EAE9]">
                          휴먼AI연구소 운영
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <span className="w-2 h-2 rounded-full bg-[#D4F56C]" />
                        <span className="text-sm font-bold text-[#E8EAE9]">
                          AI 관련 책 일곱 권 공저
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            다) 걸어온 길 (Timeline)
            왼쪽에 세로선, 연도마다 점을 찍은 모양
        ======================================================== */}
        <section className="py-28 md:py-36 px-6 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariants}
            className="mb-16 md:mb-24 text-left"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4F56C] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F56C]" />
              걸어온 길
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#E8EAE9] break-keep">
              연구원에서 AI 교육 전문가로
            </h2>
          </motion.div>

          {/* 타임라인 컨테이너 */}
          <div className="relative pl-8 md:pl-12 border-l border-white/[0.12] space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* 타임라인 왼쪽 점 */}
                <div
                  className={`absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    item.highlight
                      ? "bg-[#D4F56C] border-[#0B0D0E] shadow-[0_0_12px_#D4F56C]"
                      : "bg-[#0B0D0E] border-white/40 group-hover:border-[#D4F56C]"
                  }`}
                />

                {/* 타임라인 텍스트 블록 */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs md:text-sm font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md ${
                        item.highlight
                          ? "bg-[#D4F56C]/10 text-[#D4F56C] border border-[#D4F56C]/30"
                          : "bg-white/[0.04] text-[#9FA6A8]"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-[#E8EAE9] tracking-tight group-hover:text-[#D4F56C] transition-colors break-keep mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#9FA6A8] leading-relaxed break-keep mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================
            라) 강의 주제 (알약 모양 꼬리표를 줄줄이 - Badges)
        ======================================================== */}
        <section className="py-28 md:py-36 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariants}
            className="mb-14 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4F56C] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F56C]" />
              강의 주제
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#E8EAE9] break-keep">
              실전에 바로 쓰이는 특화 커리큘럼
            </h2>
            <p className="text-base text-[#9FA6A8] mt-3 max-w-xl break-keep">
              현업에서 가장 많은 질문과 수요가 발생하는 핵심 영역을 엄선하여
              단계별 맞춤 교육을 진행합니다.
            </p>
          </motion.div>

          {/* 알약 모양 꼬리표 배지 리스트 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3 md:gap-4 items-center"
          >
            {topics.map((topic, idx) => (
              <motion.div
                key={idx}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-default"
              >
                <div className="group relative inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-full border border-white/[0.1] bg-[#131618] text-[#E8EAE9] text-base md:text-lg font-bold transition-all duration-300 hover:border-[#D4F56C] hover:bg-[#181C1E] hover:text-[#D4F56C]">
                  <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#D4F56C] group-hover:shadow-[0_0_8px_#D4F56C] transition-all" />
                  <span>{topic}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========================================================
            바) 맨 아래 (Footer)
            홈페이지 주소와 한 줄 마무리
        ======================================================== */}
        <footer className="py-28 md:py-36 px-6 border-t border-white/[0.08] bg-[#0E1113]/90 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* 한 줄 마무리 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="max-w-2xl"
            >
              <div className="inline-block p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-[#D4F56C] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-xl md:text-3xl font-bold text-[#E8EAE9] tracking-tight leading-snug mb-8 break-keep">
                “AI를 처음 만나는 분들이 오늘 바로 써먹게 만듭니다.”
              </p>

              <p className="text-sm md:text-base text-[#9FA6A8] mb-10 break-keep">
                궁금한 점이나 강의·워크숍 요청은 공식 홈페이지에서 자세히
                확인하실 수 있습니다.
              </p>

              {/* 홈페이지 주소 강조 링크 */}
              <div className="inline-block mb-16">
                <a
                  href="https://kwonteacher.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#131618] border border-white/[0.12] hover:border-[#D4F56C] text-[#D4F56C] transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,245,108,0.2)]"
                >
                  <span className="text-lg md:text-2xl font-black tracking-tight">
                    kwonteacher.com
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>

            <Separator className="my-8 max-w-4xl opacity-50" />

            {/* 브랜드 & 저작권 */}
            <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between text-xs text-[#9FA6A8] gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#E8EAE9]">권혁용</span>
                <span>·</span>
                <span>휴먼AI연구소 대표</span>
                <span>·</span>
                <span>AI강사 권티처</span>
              </div>
              <p>© {new Date().getFullYear()} kwonteacher.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
