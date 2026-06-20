import { Download, Database, Play, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { embedPrice } from '../lib/formatPrice';

export default function Workflow() {
  const { t, lang } = useLanguage();

  const steps = [
    {
      icon: <Download className="w-6 h-6 text-white" />,
      title: t('workflow.step1Title'),
      description: t('workflow.step1Desc')
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: t('workflow.step2Title'),
      description: t('workflow.step2Desc')
    },
    {
      icon: <Play className="w-6 h-6 text-white" />,
      title: t('workflow.step3Title'),
      description: t('workflow.step3Desc')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: t('workflow.step4Title'),
      description: embedPrice(t('workflow.step4Desc'), lang)
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-white" />,
      title: t('workflow.step5Title'),
      description: t('workflow.step5Desc')
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card border-t border-border z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text-secondary sm:text-4xl mb-4"
          >
            {t('workflow.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-text-secondary font-medium">
            {t('workflow.description')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 start-0 w-full h-[2px] bg-border -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-accent border-2 border-accent/20 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-accent-hover group-hover:border-accent/30 transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                   <div className="md:hidden w-1 h-12 bg-border my-2 rounded-full"></div>
                )}
                
                <h3 className="text-sm font-bold text-text-secondary mb-2">{step.title}</h3>
                <p className="text-xs text-text-muted font-medium px-1">{step.description}</p>
                
                <div className="absolute top-0 start-1/2 -translate-x-1/2 -translate-y-3 w-8 h-8 rounded-full bg-card border-2 border-accent-dark flex items-center justify-center text-sm font-bold text-accent-dark shadow-sm z-20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-28 max-w-4xl mx-auto rounded-3xl bg-surface-alt border border-border p-10 sm:p-14 text-center shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10">
             <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent-bg text-accent-dark font-medium text-xs mb-6 border border-accent/20">
               {t('workflow.badge')}
             </div>
             <h3 className="text-2xl sm:text-3xl font-bold text-text-secondary mb-4">{t('workflow.ctaTitle')}</h3>
              <p className="text-text-secondary text-base mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                {embedPrice(t('workflow.ctaDescription'), lang)}
              </p>
              <a 
                href="https://github.com/systemorkestrix-pixel/Orkestrixx/releases/download/v1.0.0/OrkestrixSystemManager-Setup-1.0.0.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm"
             >
               <Download className="w-5 h-5" />
               {t('workflow.ctaButton')}
             </a>
             <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                 <p className="text-text-dim text-xs font-medium">{t('workflow.version')}</p>
                 <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border"></span>
                 <p className="text-text-dim text-xs font-medium">{t('workflow.compatible')}</p>
                 <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border"></span>
                 <p className="text-text-dim text-xs font-medium">{t('workflow.sansAbonnement')}</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
