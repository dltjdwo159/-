
import React from 'react';
import { ViewState, Project, Service } from '../types';

interface HomeViewProps {
  setView: (view: ViewState) => void;
  projects: Project[];
  services: Service[];
}

const HomeView: React.FC<HomeViewProps> = ({ setView, projects, services }) => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_271%2F1623915622659W53Hs_JPEG%2FDvcve-BzrRyw-CUlXPA5k4CB.jpg" 
            alt="Main Banner" 
            className="w-full h-full object-cover opacity-50 hero-zoom-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl custom-fade-up">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[2px] w-8 bg-blue-500"></div>
              <p className="text-blue-400 text-lg md:text-2xl font-black tracking-tight uppercase opacity-90">
                Engineering the Future of Industrial Spaces
              </p>
            </div>
            <p className="text-white/60 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6">
              Premium Industrial Solutions
            </p>
            <h1 className="text-white text-4xl md:text-7xl font-black mb-8 leading-[1.1] break-keep drop-shadow-2xl">
              공간의 가치를 만드는<br/>
              <span className="text-blue-400">주식회사 도우텐트</span>
            </h1>
            <div className="mb-12 border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-gray-200 text-base md:text-xl font-light tracking-tight break-keep leading-relaxed max-w-2xl">
                고객의 신뢰를 최우선으로 생각하는 도우텐트는 축적된 경험과 전문성을 바탕으로 최적의 솔루션을 제공합니다. 
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setView('CONTACT')} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl">
                무료 견적 상담
              </button>
              <button onClick={() => setView('PORTFOLIO')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-lg font-bold text-lg transition-all">
                시공사례 보기
              </button>
            </div>
          </div>
        </div>

        {/* Floating Contact Card - Small Size & Simple Implementation */}
        <div className="hidden lg:block absolute bottom-8 right-8 z-20 custom-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex bg-[#1a4b8c] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-[#0b2b52] px-4 py-4 flex flex-col items-center justify-center border-r border-white/5 min-w-[80px]">
              <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="text-white text-[12px] font-bold">상담전화</span>
            </div>
            <div className="px-6 py-4 flex flex-col justify-center">
              <a href="tel:01098396979" className="text-white text-2xl font-black tracking-tighter hover:text-blue-200 transition-colors">
                010.9839.6979
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">최근 프로젝트</h2>
              <p className="text-gray-500">도우텐트가 증명한 압도적인 결과물</p>
            </div>
            <button onClick={() => setView('PORTFOLIO')} className="text-blue-600 font-bold hover:underline">
              전체보기 →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 shadow-lg">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
