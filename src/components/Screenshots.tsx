import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Screenshots() {
  const { t } = useLanguage();

  return (
    <section id="captures" className="py-24 bg-surface relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('screenshots.title')}</h2>
           <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
           <p className="text-lg text-text-secondary font-medium">
             {t('screenshots.description')}
           </p>
        </div>
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface overflow-hidden shadow-md"
          >
             <img 
               src="/assets/Piont De vente.PNG" 
               alt={t('screenshots.altPOS')} 
               className="w-full h-auto"
             />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm"
             >
                 <img 
                   src="/assets/dashboard-screenshot.PNG" 
                   alt={t('screenshots.altDashboard')} 
                   className="w-full h-auto"
                 />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm"
             >
                 <img 
                   src="/assets/Inventaire.PNG" 
                   alt={t('screenshots.altStock')} 
                   className="w-full h-auto"
                 />
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm"
             >
                 <img 
                   src="/assets/Ventes.PNG" 
                   alt={t('screenshots.altSales')} 
                   className="w-full h-auto"
                 />
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm"
             >
                 <img 
                   src="/assets/Fournisseurs.PNG" 
                   alt={t('screenshots.altSuppliers')} 
                   className="w-full h-auto"
                 />
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm"
             >
                 <img 
                   src="/assets/Rapports.PNG" 
                   alt={t('screenshots.altReports')} 
                   className="w-full h-auto"
                 />
             </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
