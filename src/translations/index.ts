export type Language = 'fr' | 'ar';

export type TranslationKey =
  | 'header.accueil' | 'header.modules' | 'header.tarifs' | 'header.partenaires'
  | 'header.essaiGratuit' | 'header.telechargerEssai' | 'header.systemManager'
  | 'hero.badge' | 'hero.titlePrefix' | 'hero.titleHighlight'
  | 'hero.description' | 'hero.button' | 'hero.screenshotAlt'
  | 'hero.price' | 'hero.priceTag'
  | 'whatYouCanDo.title' | 'whatYouCanDo.description'
  | 'whatYouCanDo.item1Title' | 'whatYouCanDo.item1Desc'
  | 'whatYouCanDo.item2Title' | 'whatYouCanDo.item2Desc'
  | 'whatYouCanDo.item3Title' | 'whatYouCanDo.item3Desc'
  | 'whatYouCanDo.item4Title' | 'whatYouCanDo.item4Desc'
  | 'whatYouCanDo.item5Title' | 'whatYouCanDo.item5Desc'
  | 'whatYouCanDo.item6Title' | 'whatYouCanDo.item6Desc'
  | 'screenshots.altDashboard' | 'screenshots.altPOS' | 'screenshots.altStock'
  | 'screenshots.altSales' | 'screenshots.altSuppliers' | 'screenshots.altReports'
  | 'screenshots.prev' | 'screenshots.next' | 'screenshots.close' | 'screenshots.dot'
  | 'trust.title' | 'trust.description'
  | 'trust.item1' | 'trust.item2' | 'trust.item3' | 'trust.item4'
  | 'trust.item5' | 'trust.item6'
  | 'pricing.title' | 'pricing.description' | 'pricing.badge'
  | 'pricing.price'
  | 'pricing.benefit1' | 'pricing.benefit2' | 'pricing.benefit3'
  | 'pricing.benefit4' | 'pricing.benefit5' | 'pricing.benefit6'
  | 'pricing.paymentTitle' | 'pricing.paymentText'
  | 'pricing.trialText' | 'pricing.button'
  | 'pricing.tagline'
  | 'workflow.title' | 'workflow.description'
  | 'workflow.step1Title' | 'workflow.step1Desc'
  | 'workflow.step2Title' | 'workflow.step2Desc'
  | 'workflow.step3Title' | 'workflow.step3Desc'
  | 'workflow.step4Title' | 'workflow.step4Desc'
  | 'workflow.step5Title' | 'workflow.step5Desc'
  | 'workflow.badge' | 'workflow.ctaTitle' | 'workflow.ctaDescription'
  | 'workflow.ctaButton' | 'workflow.version' | 'workflow.compatible'
  | 'workflow.sansAbonnement'
  | 'targetAudience.title' | 'targetAudience.description'
  | 'targetAudience.item1' | 'targetAudience.item2' | 'targetAudience.item3'
  | 'targetAudience.item4' | 'targetAudience.item5' | 'targetAudience.item6'
  | 'reseller.title' | 'reseller.description'
  | 'reseller.item1Title' | 'reseller.item1Desc'
  | 'reseller.item2Title' | 'reseller.item2Desc'
  | 'reseller.item3Title' | 'reseller.item3Desc'
  | 'reseller.item4Title' | 'reseller.item4Desc'
  | 'reseller.button'
  | 'footer.description' | 'footer.quickLinks' | 'footer.accueil'
  | 'footer.modules' | 'footer.tarifs' | 'footer.partenaires'
  | 'footer.telechargement' | 'footer.productInfo' | 'footer.name'
  | 'footer.category' | 'footer.platform' | 'footer.posInventory'
  | 'footer.windowsDesktop'   | 'footer.copyright' | 'footer.license'
  | 'footer.informations' | 'footer.commentAcheter' | 'footer.programmeRevendeur' | 'footer.contact'
  | 'footer.groupeProduit' | 'footer.groupeEntreprise'
  | 'footer.fonctionnalites'
  | 'reseller.learnMore'
  | 'features.title' | 'features.description'
  | 'features.item1Title' | 'features.item1Desc'
  | 'features.item2Title' | 'features.item2Desc'
  | 'features.item3Title' | 'features.item3Desc'
  | 'features.item4Title' | 'features.item4Desc'
  | 'features.item5Title' | 'features.item5Desc'
  | 'features.item6Title' | 'features.item6Desc'
  | 'newsletter.title' | 'newsletter.description'
  | 'newsletter.emailLabel' | 'newsletter.emailPlaceholder'
  | 'newsletter.roleLabel' | 'newsletter.roleProspect'
  | 'newsletter.roleCustomer' | 'newsletter.roleReseller'
  | 'newsletter.roleDistributor'
  | 'newsletter.submitText' | 'newsletter.submittingText'
  | 'newsletter.successTitle' | 'newsletter.successText'
  | 'newsletter.subscribeAgain'
  | 'newsletter.privacyText' | 'newsletter.errorMessage'
  | 'legal.backToHome' | 'legal.lastUpdated' | 'legal.date'
  | 'legal.mentionsTitle' | 'legal.privacyTitle' | 'legal.cgvTitle'
  | 'resellerPage.backToHome' | 'resellerPage.title' | 'resellerPage.description'
  | 'resellerPage.rolesTitle' | 'resellerPage.benefitsTitle' | 'resellerPage.howToTitle'
  | 'resellerPage.ctaTitle' | 'resellerPage.ctaDesc' | 'resellerPage.ctaButton' | 'resellerPage.ctaNote'
  | 'resellerPage.role1Title' | 'resellerPage.role1Desc'
  | 'resellerPage.role2Title' | 'resellerPage.role2Desc'
  | 'resellerPage.role3Title' | 'resellerPage.role3Desc'
  | 'resellerPage.role4Title' | 'resellerPage.role4Desc'
  | 'resellerPage.benefit1Title' | 'resellerPage.benefit1Desc'
  | 'resellerPage.benefit2Title' | 'resellerPage.benefit2Desc'
  | 'resellerPage.benefit3Title' | 'resellerPage.benefit3Desc'
  | 'resellerPage.benefit4Title' | 'resellerPage.benefit4Desc'
  | 'resellerPage.step1Title' | 'resellerPage.step1Desc'
  | 'resellerPage.step2Title' | 'resellerPage.step2Desc'
  | 'resellerPage.step3Title' | 'resellerPage.step3Desc'
  | 'resellerPage.step4Title' | 'resellerPage.step4Desc'
  | 'purchaseProcess.backToHome' | 'purchaseProcess.title' | 'purchaseProcess.description'
  | 'purchaseProcess.stepsTitle' | 'purchaseProcess.paymentTitle' | 'purchaseProcess.paymentNote'
  | 'purchaseProcess.ctaTitle' | 'purchaseProcess.ctaDesc' | 'purchaseProcess.ctaButton' | 'purchaseProcess.ctaReseller'
  | 'purchaseProcess.step1Title' | 'purchaseProcess.step1Desc'
  | 'purchaseProcess.step2Title' | 'purchaseProcess.step2Desc'
  | 'purchaseProcess.step3Title' | 'purchaseProcess.step3Desc'
  | 'purchaseProcess.step4Title' | 'purchaseProcess.step4Desc'
  | 'purchaseProcess.step5Title' | 'purchaseProcess.step5Desc'
  | 'purchaseProcess.step6Title' | 'purchaseProcess.step6Desc'
  | 'purchaseProcess.method1Name' | 'purchaseProcess.method1Desc'
  | 'purchaseProcess.method2Name' | 'purchaseProcess.method2Desc'
  | 'purchaseProcess.method3Name' | 'purchaseProcess.method3Desc'
  | 'purchaseProcess.method4Name' | 'purchaseProcess.method4Desc'
  | 'purchaseProcess.method5Name' | 'purchaseProcess.method5Desc'
  | 'purchaseProcess.typeInternational' | 'purchaseProcess.typeLocal'
  | 'legalMentions.titleMeta' | 'legalMentions.descMeta'
  | 'legalMentions.s1Title' | 'legalMentions.s1P1'
  | 'legalMentions.s1Li1' | 'legalMentions.s1Li2' | 'legalMentions.s1Li3' | 'legalMentions.s1Li4'
  | 'legalMentions.s1Li5' | 'legalMentions.s1Li6' | 'legalMentions.s1Li7' | 'legalMentions.s1Li8'
  | 'legalMentions.s2Title' | 'legalMentions.s2P1'
  | 'legalMentions.s3Title' | 'legalMentions.s3P1'
  | 'legalMentions.s3Li1' | 'legalMentions.s3Li2' | 'legalMentions.s3Li3'
  | 'legalMentions.s4Title' | 'legalMentions.s4P1' | 'legalMentions.s4P2' | 'legalMentions.s4P3'
  | 'legalMentions.s5Title' | 'legalMentions.s5P1'
  | 'legalMentions.s5P2Before' | 'legalMentions.s5P2After'
  | 'legalMentions.s6Title' | 'legalMentions.s6P1'
  | 'legalMentions.s7Title' | 'legalMentions.s7P1' | 'legalMentions.s7P2' | 'legalMentions.s7P3'
  | 'legalMentions.s8Title' | 'legalMentions.s8P1'
  | 'privacy.titleMeta' | 'privacy.descMeta'
  | 'privacy.s1Title' | 'privacy.s1P1'
  | 'privacy.s1Li1' | 'privacy.s1Li2' | 'privacy.s1Li3' | 'privacy.s1Li4'
  | 'privacy.s2Title' | 'privacy.s2P1'
  | 'privacy.s2Li1' | 'privacy.s2Li2' | 'privacy.s2Li3'
  | 'privacy.s3Title' | 'privacy.s3P1'
  | 'privacy.s3Li1' | 'privacy.s3Li2' | 'privacy.s3Li3' | 'privacy.s3Li4' | 'privacy.s3Li5' | 'privacy.s3Li6' | 'privacy.s3Li7'
  | 'privacy.s4Title' | 'privacy.s4P1'
  | 'privacy.s4Li1' | 'privacy.s4Li2' | 'privacy.s4Li3' | 'privacy.s4Li4' | 'privacy.s4P2'
  | 'privacy.s5Title' | 'privacy.s5P1'
  | 'privacy.s5Li1' | 'privacy.s5Li2' | 'privacy.s5Li3' | 'privacy.s5Li4'
  | 'privacy.s6Title' | 'privacy.s6P1'
  | 'privacy.s6Li1' | 'privacy.s6Li2' | 'privacy.s6Li3' | 'privacy.s6Li4' | 'privacy.s6Li5' | 'privacy.s6Li6' | 'privacy.s6Li7'
  | 'privacy.s6P2'
  | 'privacy.s7Title' | 'privacy.s7P1'
  | 'privacy.s8Title' | 'privacy.s8P1'
  | 'privacy.s8Li1' | 'privacy.s8Li2' | 'privacy.s8P2'
  | 'privacy.s9Title' | 'privacy.s9P1'
  | 'privacy.s10Title' | 'privacy.s10P1'
  | 'cgv.titleMeta' | 'cgv.descMeta'
  | 'cgv.s1Title' | 'cgv.s1P1'
  | 'cgv.s2Title' | 'cgv.s2P1' | 'cgv.s2Li1' | 'cgv.s2Li2' | 'cgv.s2Li3' | 'cgv.s2Li4' | 'cgv.s2Li5' | 'cgv.s2Li6' | 'cgv.s2P2'
  | 'cgv.s3Title' | 'cgv.s3P1' | 'cgv.s3Li1' | 'cgv.s3Li2' | 'cgv.s3Li3' | 'cgv.s3Li4' | 'cgv.s3P2'
  | 'cgv.s4Title' | 'cgv.s4P1' | 'cgv.s4Li1' | 'cgv.s4Li2' | 'cgv.s4P2'
  | 'cgv.s5Title' | 'cgv.s5P1'
  | 'cgv.s5Li1' | 'cgv.s5Li2' | 'cgv.s5Li3' | 'cgv.s5Li4'
  | 'cgv.s6Title' | 'cgv.s6P1' | 'cgv.s6Li1' | 'cgv.s6Li2' | 'cgv.s6Li3' | 'cgv.s6Li4' | 'cgv.s6Li5'
  | 'cgv.s7Title' | 'cgv.s7P1'
  | 'cgv.s7Li1' | 'cgv.s7Li2' | 'cgv.s7Li3'
  | 'cgv.s8Title' | 'cgv.s8P1' | 'cgv.s8P2'
  | 'cgv.s9Title' | 'cgv.s9P1' | 'cgv.s9P2' | 'cgv.s9P3'
  | 'cgv.s10Title' | 'cgv.s10P1' | 'cgv.s10P2' | 'cgv.s10P3'
  | 'cgv.s10Li1' | 'cgv.s10Li2' | 'cgv.s10Li3' | 'cgv.s10Li4'
  | 'cgv.s11Title' | 'cgv.s11P1'
  | 'cgv.s11Li1' | 'cgv.s11Li2' | 'cgv.s11Li3' | 'cgv.s11Li4'
  | 'cgv.s12Title' | 'cgv.s12P1'
  | 'cgv.s12Li1' | 'cgv.s12Li2' | 'cgv.s12Li3' | 'cgv.s12Li4' | 'cgv.s12P2'
  | 'cgv.s13Title' | 'cgv.s13P1' | 'cgv.s13P2'
  | 'cgv.s14Title' | 'cgv.s14P1' | 'cgv.s14P2' | 'cgv.s14P3'
  | 'footer.os' | 'footer.version' | 'footer.systemName'
  | 'notFound.title' | 'notFound.description' | 'notFound.heading' | 'notFound.message'
  | 'languageSwitcher.switchToArabic' | 'languageSwitcher.switchToFrench';

const translations: Record<TranslationKey, { fr: string; ar: string }> = {
  // Header
  'header.accueil': { fr: 'Accueil', ar: 'الرئيسية' },
  'header.modules': { fr: 'Modules', ar: 'الوحدات' },
  'header.tarifs': { fr: 'Tarifs', ar: 'الأسعار' },
  'header.partenaires': { fr: 'Partenaires', ar: 'الشركاء' },
  'header.essaiGratuit': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },
  'header.telechargerEssai': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },
  'header.systemManager': { fr: 'System Manager', ar: 'مدير النظام' },

  // Hero — value-first, no price
  'hero.badge': { fr: 'Offre de lancement', ar: 'عرض الإطلاق' },
  'hero.titlePrefix': { fr: 'Logiciel de gestion des ventes et des stocks', ar: 'برنامج إدارة المبيعات والمخزون' },
  'hero.titleHighlight': { fr: 'sans abonnement', ar: 'بدون اشتراك' },
  'hero.price': { fr: '7 250 د.ج', ar: '7 250 د.ج' },
  'hero.priceTag': { fr: 'Licence à vie • Paiement unique • Sans abonnement', ar: 'رخصة مدى الحياة • دفعة واحدة • بدون اشتراك' },
  'hero.description': { fr: "POS rapide, stock à jour, rapports clairs. Licence à vie, paiement unique.", ar: 'نقطة بيع سريعة، مخزون محدث، تقارير واضحة. رخصة مدى الحياة، دفعة واحدة.' },
  'hero.button': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },
  'hero.screenshotAlt': { fr: "Capture d'écran du logiciel Orkestrix", ar: 'لقطة شاشة لبرنامج أوركيستريكس' },

  // WhatYouCanDo — action-oriented capabilities
  'whatYouCanDo.title': { fr: 'Ce que vous pouvez faire', ar: 'ماذا يمكنك أن تفعل' },
  'whatYouCanDo.description': { fr: 'Logiciel complet. Prix unique. Zéro abonnement.', ar: 'برنامج كامل. سعر واحد. بدون اشتراك.' },
  'whatYouCanDo.item1Title': { fr: 'Vendre et facturer rapidement', ar: 'البيع وإصدار الفواتير بسرعة' },
  'whatYouCanDo.item1Desc': { fr: '', ar: '' },
  'whatYouCanDo.item2Title': { fr: 'Suivre le stock', ar: 'تتبع المخزون' },
  'whatYouCanDo.item2Desc': { fr: '', ar: '' },
  'whatYouCanDo.item3Title': { fr: 'Gérer les fournisseurs', ar: 'إدارة الموردين' },
  'whatYouCanDo.item3Desc': { fr: '', ar: '' },
  'whatYouCanDo.item4Title': { fr: 'Consulter les rapports', ar: 'الاطلاع على التقارير' },
  'whatYouCanDo.item4Desc': { fr: '', ar: '' },
  'whatYouCanDo.item5Title': { fr: 'Organiser les produits', ar: 'تنظيم المنتجات' },
  'whatYouCanDo.item5Desc': { fr: '', ar: '' },
  'whatYouCanDo.item6Title': { fr: 'Travailler hors ligne', ar: 'العمل بدون إنترنت' },
  'whatYouCanDo.item6Desc': { fr: '', ar: '' },

  // Screenshots
  'screenshots.altDashboard': { fr: 'Tableau de bord principal', ar: 'لوحة التحكم الرئيسية' },
  'screenshots.altPOS': { fr: 'Interface de point de vente', ar: 'واجهة نقطة البيع' },
  'screenshots.altStock': { fr: 'Gestion des stocks', ar: 'إدارة المخزون' },
  'screenshots.altSales': { fr: 'Historique des ventes', ar: 'سجل المبيعات' },
  'screenshots.altSuppliers': { fr: 'Gestion des fournisseurs', ar: 'إدارة الموردين' },
  'screenshots.altReports': { fr: 'Rapports', ar: 'التقارير' },
  'screenshots.prev': { fr: 'Précédent', ar: 'السابق' },
  'screenshots.next': { fr: 'Suivant', ar: 'التالي' },
  'screenshots.close': { fr: 'Fermer', ar: 'إغلاق' },
  'screenshots.dot': { fr: 'Capture', ar: 'لقطة' },

  // Trust — Why Orkestrix (merged with Investment)
  'trust.title': { fr: 'Pourquoi Orkestrix ?', ar: 'لماذا أوركيستريكس؟' },
  'trust.description': { fr: 'Licence à vie, paiement unique, zéro abonnement.', ar: 'رخصة مدى الحياة، دفعة واحدة، بدون اشتراك.' },
  'trust.item1': { fr: 'Fonctionne sans Internet', ar: 'يعمل بدون إنترنت' },
  'trust.item2': { fr: 'Licence permanente', ar: 'رخصة دائمة' },
  'trust.item3': { fr: 'Données sur votre PC', ar: 'بياناتك على جهازك' },
  'trust.item4': { fr: 'Paiement unique', ar: 'دفعة واحدة' },
  'trust.item5': { fr: 'Mises à jour incluses', ar: 'التحديثات مشمولة' },
  'trust.item6': { fr: 'Sans abonnement', ar: 'بدون اشتراك' },

  // Pricing — everything in one place
  'pricing.title': { fr: 'Une licence. Un paiement. À vie.', ar: 'رخصة واحدة. دفعة واحدة. مدى الحياة.' },
  'pricing.description': { fr: '7 250 د.ج. Sans abonnement. Aucune surprise.', ar: '7 250 د.ج. بدون اشتراك. بدون مفاجآت.' },
  'pricing.badge': { fr: 'Offre de lancement', ar: 'عرض الإطلاق' },
  'pricing.price': { fr: '7 250 د.ج', ar: '7 250 د.ج' },
  'pricing.tagline': { fr: 'Achetez une fois. Utilisez à vie.', ar: 'اشترِ مرة. استخدم مدى الحياة.' },
  'pricing.benefit1': { fr: 'Licence permanente', ar: 'رخصة دائمة' },
  'pricing.benefit2': { fr: 'Paiement unique', ar: 'دفعة واحدة' },
  'pricing.benefit3': { fr: 'Sans abonnement', ar: 'بدون اشتراك' },
  'pricing.benefit4': { fr: 'Mises à jour incluses', ar: 'التحديثات مشمولة' },
  'pricing.benefit5': { fr: 'Données locales', ar: 'بيانات محلية' },
  'pricing.benefit6': { fr: 'Fonctionne hors ligne', ar: 'يعمل بدون إنترنت' },
  'pricing.paymentTitle': { fr: 'Paiement', ar: 'الدفع' },
  'pricing.paymentText': { fr: 'Après validation, votre certificat d\'activation vous est envoyé.', ar: 'بعد التأكيد، يتم إرسال شهادة التفعيل.' },
  'pricing.trialText': { fr: 'Essayez 14 jours gratuitement. Pas de carte bancaire.', ar: 'جرب 14 يومًا مجانًا. بدون بطاقة بنكية.' },
  'pricing.button': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },

  // Workflow
  'workflow.title': { fr: 'Comment ça marche', ar: 'كيف يعمل' },
  'workflow.description': { fr: 'Téléchargez, testez 14 jours, achetez la licence à vie.', ar: 'حمّل، اختبر 14 يومًا، اشترِ الرخصة مدى الحياة.' },
  'workflow.step1Title': { fr: 'Télécharger', ar: 'تحميل' },
  'workflow.step1Desc': { fr: 'Installez le logiciel sur votre PC Windows.', ar: 'ثبّت البرنامج على جهاز الكمبيوتر.' },
  'workflow.step2Title': { fr: 'Installer', ar: 'تثبيت' },
  'workflow.step2Desc': { fr: 'Configurez vos produits en quelques clics.', ar: 'أضف منتجاتك في دقائق.' },
  'workflow.step3Title': { fr: 'Tester 14 jours', ar: 'تجربة 14 يومًا' },
  'workflow.step3Desc': { fr: 'Essayez avec vos vraies données. Sans risque.', ar: 'جرب ببياناتك الحقيقية. بدون مخاطرة.' },
  'workflow.step4Title': { fr: 'Acheter la licence', ar: 'شراء الرخصة' },
  'workflow.step4Desc': { fr: 'Licence à vie, paiement unique de 7 250 د.ج.', ar: 'رخصة مدى الحياة، دفعة واحدة 7 250 د.ج.' },
  'workflow.step5Title': { fr: 'Utiliser à vie', ar: 'استخدام مدى الحياة' },
  'workflow.step5Desc': { fr: 'Profitez sans limite ni abonnement.', ar: 'استمتع بدون حدود ولا اشتراك.' },
  'workflow.badge': { fr: 'Essai gratuit 14 jours', ar: 'تجربة مجانية 14 يومًا' },
  'workflow.ctaTitle': { fr: 'Prêt à passer à l\'action ?', ar: 'مستعد للانطلاق؟' },
  'workflow.ctaDescription': { fr: 'Téléchargez, installez et testez 14 jours. Si le logiciel vous convient, achetez la licence à vie 7 250 د.ج.', ar: 'حمّل، ثبّت واختبر 14 يومًا. إذا ناسبك البرنامج، اشترِ الرخصة مدى الحياة 7 250 د.ج.' },
  'workflow.ctaButton': { fr: 'Télécharger l\'essai gratuit', ar: 'تحميل النسخة التجريبية' },
  'workflow.version': { fr: 'Version 1.0.0 stable', ar: 'إصدار 1.0.0 مستقر' },
  'workflow.compatible': { fr: 'Windows 10/11', ar: 'ويندوز 10/11' },
  'workflow.sansAbonnement': { fr: 'Sans abonnement', ar: 'بدون اشتراك' },

  // Target Audience
  'targetAudience.title': { fr: 'À qui s\'adresse ce logiciel ?', ar: 'لمن هذا البرنامج؟' },
  'targetAudience.description': { fr: 'Commerces de proximité, supérettes, magasins spécialisés : si vous vendez en magasin, Orkestrix est pour vous.', ar: 'المتاجر المحلية، السوبر ماركت، المحلات المتخصصة: إذا كنت تبيع في متجر، أوركيستريكس لك.' },
  'targetAudience.item1': { fr: 'Épiceries et alimentations', ar: 'البقالات والمواد الغذائية' },
  'targetAudience.item2': { fr: 'Supérettes et supermarchés', ar: 'السوبر ماركت' },
  'targetAudience.item3': { fr: 'Magasins de détail', ar: 'متاجر التجزئة' },
  'targetAudience.item4': { fr: 'Quincailleries et matériaux', ar: 'محلات المواد' },
  'targetAudience.item5': { fr: 'Boutiques spécialisées', ar: 'المتاجر المتخصصة' },
  'targetAudience.item6': { fr: 'Commerces de proximité', ar: 'التجارة المحلية' },

  // Reseller
  'reseller.title': { fr: 'Programme Revendeur', ar: 'برنامج الموزعين' },
  'reseller.description': { fr: 'Achetez pour vos clients. Déployez. Gagnez une marge sur chaque licence.', ar: 'اشترِ لعملائك. وزع. اربح هامش ربح على كل رخصة.' },
  'reseller.item1Title': { fr: '', ar: '' },
  'reseller.item1Desc': { fr: '', ar: '' },
  'reseller.item2Title': { fr: '', ar: '' },
  'reseller.item2Desc': { fr: '', ar: '' },
  'reseller.item3Title': { fr: '', ar: '' },
  'reseller.item3Desc': { fr: '', ar: '' },
  'reseller.item4Title': { fr: '', ar: '' },
  'reseller.item4Desc': { fr: '', ar: '' },
  'reseller.button': { fr: 'Devenir revendeur', ar: 'كن موزعًا' },

  // Footer
  'footer.description': { fr: 'Logiciel de gestion des ventes, achats et stocks. Licence permanente, paiement unique.', ar: 'برنامج إدارة المبيعات والمشتريات والمخزون. رخصة دائمة، دفعة واحدة.' },
  'footer.quickLinks': { fr: 'Liens rapides', ar: 'روابط سريعة' },
  'footer.accueil': { fr: 'Accueil', ar: 'الرئيسية' },
  'footer.modules': { fr: 'Modules', ar: 'الوحدات' },
  'footer.tarifs': { fr: 'Tarifs', ar: 'الأسعار' },
  'footer.partenaires': { fr: 'Partenaires', ar: 'الشركاء' },
  'footer.telechargement': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },
  'footer.productInfo': { fr: 'Infos produit', ar: 'معلومات المنتج' },
  'footer.name': { fr: 'Nom', ar: 'الاسم' },
  'footer.category': { fr: 'Catégorie', ar: 'الفئة' },
  'footer.platform': { fr: 'Plateforme', ar: 'المنصة' },
  'footer.posInventory': { fr: 'POS & Stock', ar: 'نقطة بيع ومخزون' },
  'footer.windowsDesktop': { fr: 'Windows Desktop', ar: 'ويندوز' },
  'footer.copyright': { fr: 'Orkestrix System Manager. Tous droits réservés.', ar: 'أوركيستريكس. جميع الحقوق محفوظة.' },
  'footer.license': { fr: 'Licence permanente', ar: 'رخصة دائمة' },

  // Footer — legal links

  'footer.informations': { fr: 'Informations', ar: 'معلومات' },
  'footer.commentAcheter': { fr: 'Comment acheter', ar: 'كيف تشتري' },
  'footer.programmeRevendeur': { fr: 'Programme Revendeur', ar: 'برنامج الموزعين' },
  'footer.contact': { fr: 'Contact', ar: 'اتصل بنا' },
  'footer.groupeProduit': { fr: 'Produit', ar: 'المنتج' },
  'footer.groupeEntreprise': { fr: 'Entreprise', ar: 'الشركة' },

  'footer.fonctionnalites': { fr: 'Fonctionnalités', ar: 'الميزات' },

  'reseller.learnMore': { fr: 'En savoir plus', ar: 'اعرف المزيد' },

  // Legal pages
  'legal.backToHome': { fr: "Retour à l'accueil", ar: 'العودة إلى الرئيسية' },
  'legal.lastUpdated': { fr: 'Dernière mise à jour', ar: 'آخر تحديث' },
  'legal.date': { fr: 'Juin 2026', ar: 'يونيو 2026' },
  'legal.mentionsTitle': { fr: 'Mentions Légales', ar: 'إشعارات قانونية' },
  'legal.privacyTitle': { fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية' },
  'legal.cgvTitle': { fr: 'Conditions Générales de Vente', ar: 'الشروط العامة للبيع' },

  // Reseller Page
  'resellerPage.backToHome': { fr: "Retour à l'accueil", ar: 'العودة إلى الرئيسية' },
  'resellerPage.title': { fr: 'Programme Revendeur Orkestrix', ar: 'برنامج موزعي أوركيستريكس' },
  'resellerPage.description': { fr: 'Devenez partenaire et développez votre activité avec une solution de gestion sans abonnement.', ar: 'كن شريكًا وطوّر نشاطك التجاري مع حل إداري بدون اشتراك.' },
  'resellerPage.rolesTitle': { fr: 'Profils concernés', ar: 'الملفات المعنية' },
  'resellerPage.role1Title': { fr: 'Revendeurs informatiques', ar: 'موزعو الحلول التقنية' },
  'resellerPage.role1Desc': { fr: 'Proposez Orkestrix à vos clients avec une marge négociée. Intégrez le logiciel à votre catalogue de services.', ar: 'قدّم أوركيستريكس لعملائك بهامش ربح محدد. أدرج البرنامج في كتالوج خدماتك.' },
  'resellerPage.role2Title': { fr: "Magasins d'informatique", ar: 'متاجر الحاسوب' },
  'resellerPage.role2Desc': { fr: 'Vendez Orkestrix dans votre point de vente. Devenez revendeur agréé et bénéficiez de conditions préférentielles.', ar: 'بع أوركيستريكس في متجرك. كن موزعًا معتمدًا واستفد من شروط تفضيلية.' },
  'resellerPage.role3Title': { fr: 'Intégrateurs locaux', ar: 'المدمجون المحليون' },
  'resellerPage.role3Desc': { fr: 'Installez et déployez le logiciel chez vos clients. Assurez la formation et le suivi technique.', ar: 'قم بتثبيت ونشر البرنامج لدى عملائك. قدّم التدريب والمتابعة التقنية.' },
  'resellerPage.role4Title': { fr: 'Prestataires numériques', ar: 'مزودو الخدمات الرقمية' },
  'resellerPage.role4Desc': { fr: 'Élargissez votre offre avec une solution de gestion sans abonnement. Un argument commercial fort pour vos clients.', ar: 'وسّع عروضك بحل إداري بدون اشتراك. حجة تجارية قوية لعملائك.' },
  'resellerPage.benefitsTitle': { fr: 'Avantages', ar: 'المزايا' },
  'resellerPage.benefit1Title': { fr: 'Marges commerciales attractives', ar: 'هوامش ربحية جذابة' },
  'resellerPage.benefit1Desc': { fr: 'Bénéficiez de marges négociées sur chaque licence vendue. Plus vous vendez, meilleures sont vos conditions.', ar: 'استفد من هوامش ربح على كل رخصة مباعة. كلما بعت أكثر، كانت شروطك أفضل.' },
  'resellerPage.benefit2Title': { fr: 'Droits de revente et déploiement', ar: 'حقوق البيع والنشر' },
  'resellerPage.benefit2Desc': { fr: 'Revendez les licences à vos clients et déployez le logiciel chez eux. Une licence par installation client.', ar: 'بع التراخيص لعملائك وانشر البرنامج عندهم. رخصة واحدة لكل تثبيت.' },
  'resellerPage.benefit3Title': { fr: 'Support technique dédié', ar: 'دعم تقني مخصص' },
  'resellerPage.benefit3Desc': { fr: 'Accédez à un canal de support prioritaire pour vous et vos clients. Documentation technique incluse.', ar: 'احصل على قناة دعم ذات أولوية لك ولعملائك. الوثائق التقنية مشمولة.' },
  'resellerPage.benefit4Title': { fr: 'Processus simplifié', ar: 'عملية مبسطة' },
  'resellerPage.benefit4Desc': { fr: 'Les licences revendeurs sont validées manuellement et livrées par e-mail. Gestion administrative allégée.', ar: 'تراخيص الموزعين تُصدق يدويًا وتُسلم عبر البريد الإلكتروني. إدارة إدارية مخففة.' },
  'resellerPage.howToTitle': { fr: 'Comment devenir revendeur', ar: 'كيف تصبح موزعًا' },
  'resellerPage.step1Title': { fr: 'Candidature', ar: 'تقديم الطلب' },
  'resellerPage.step1Desc': { fr: 'Envoyez votre demande via le formulaire ou par e-mail. Précisez votre activité et votre zone géographique.', ar: 'أرسل طلبك عبر البريد الإلكتروني. حدد نشاطك ومنطقتك الجغرافية.' },
  'resellerPage.step2Title': { fr: 'Évaluation', ar: 'التقييم' },
  'resellerPage.step2Desc': { fr: 'Nous étudions votre profil et vos motivations. Un entretien peut être organisé pour mieux comprendre votre activité.', ar: 'ندرس ملفك ودوافعك. قد يتم تنظيم مقابلة لفهم نشاطك بشكل أفضل.' },
  'resellerPage.step3Title': { fr: 'Agrément', ar: 'الاعتماد' },
  'resellerPage.step3Desc': { fr: 'Si votre candidature est retenue, vous recevez votre contrat de revendeur et vos conditions commerciales.', ar: 'إذا تم قبول طلبك، تستلم عقد الموزع والشروط التجارية.' },
  'resellerPage.step4Title': { fr: 'Démarrage', ar: 'البدء' },
  'resellerPage.step4Desc': { fr: 'Vous recevez la documentation, les supports commerciaux et vos premières licences de démonstration.', ar: 'تستلم الوثائق والمواد التجارية وأول تراخيص العرض.' },
  'resellerPage.ctaTitle': { fr: 'Prêt à rejoindre le programme ?', ar: 'مستعد للانضمام للبرنامج؟' },
  'resellerPage.ctaDesc': { fr: 'Envoyez votre candidature dès maintenant. Notre équipe vous répondra sous 48 heures ouvrées.', ar: 'أرسل طلبك الآن. سيرد فريقنا خلال 48 ساعة عمل.' },
  'resellerPage.ctaButton': { fr: 'Devenir Revendeur', ar: 'كن موزعًا' },
  'resellerPage.ctaNote': { fr: 'Les candidatures sont traitées manuellement. Licence revendeur délivrée après validation.', ar: 'تتم معالجة الطلبات يدويًا. يتم إصدار رخصة الموزع بعد الموافقة.' },

  // Purchase Process
  'purchaseProcess.backToHome': { fr: "Retour à l'accueil", ar: 'العودة إلى الرئيسية' },
  'purchaseProcess.title': { fr: 'Comment Acheter', ar: 'كيف تشتري' },
  'purchaseProcess.description': { fr: "De l'essai gratuit à l'activation de votre licence à vie. Voici comment procéder.", ar: 'من التجربة المجانية إلى تفعيل رخصتك مدى الحياة. إليك الخطوات.' },
  'purchaseProcess.stepsTitle': { fr: 'Les étapes', ar: 'الخطوات' },
  'purchaseProcess.step1Title': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },
  'purchaseProcess.step1Desc': { fr: "Téléchargez le logiciel depuis notre site et installez-le sur votre PC Windows. Aucune inscription requise.", ar: 'حمّل البرنامج من موقعنا وثبّته على جهازك. لا حاجة للتسجيل.' },
  'purchaseProcess.step2Title': { fr: 'Tester le logiciel', ar: 'تجربة البرنامج' },
  'purchaseProcess.step2Desc': { fr: "Profitez de 14 jours d'essai avec toutes les fonctionnalités. Testez avec vos vraies données, sans restriction.", ar: 'استمتع بـ 14 يومًا تجربة مع كل الميزات. اختبر ببياناتك الحقيقية.' },
  'purchaseProcess.step3Title': { fr: 'Choisir un mode de paiement', ar: 'اختيار طريقة الدفع' },
  'purchaseProcess.step3Desc': { fr: 'Sélectionnez le mode de paiement qui vous convient : carte bancaire, PayPal, BaridiMob, CCP ou Binance Pay.', ar: 'اختر طريقة الدفع المناسبة: بطاقة بنكية، باي بال، باريدي موب، سي سي بي أو بينانس باي.' },
  'purchaseProcess.step4Title': { fr: 'Validation du paiement', ar: 'تأكيد الدفع' },
  'purchaseProcess.step4Desc': { fr: 'Effectuez le paiement. La validation est immédiate pour les paiements par carte ou PayPal. Les paiements locaux sont vérifiés sous 48h.', ar: 'قم بالدفع. التأكيد فوري للبطاقة وباي بال. يتم التحقق من الدفعات المحلية خلال 48 ساعة.' },
  'purchaseProcess.step5Title': { fr: 'Réception de la licence', ar: 'استلام الرخصة' },
  'purchaseProcess.step5Desc': { fr: 'Votre certificat d\'activation vous est envoyé par e-mail. Conservez-le précieusement — il est lié à votre installation.', ar: 'يُرسل شهادة التفعيل إلى بريدك الإلكتروني. احتفظ به — إنها مرتبطة بتثبيتك.' },
  'purchaseProcess.step6Title': { fr: 'Activation du logiciel', ar: 'تفعيل البرنامج' },
  'purchaseProcess.step6Desc': { fr: 'Suivez la procédure d\'activation dans le logiciel pour activer votre version définitive. Licence à vie, sans abonnement.', ar: 'اتبع إجراءات التفعيل في البرنامج لتفعيل النسخة النهائية. رخصة مدى الحياة.' },
  'purchaseProcess.paymentTitle': { fr: 'Moyens de paiement acceptés', ar: 'طرق الدفع المقبولة' },
  'purchaseProcess.method1Name': { fr: 'Carte Bancaire', ar: 'بطاقة بنكية' },
  'purchaseProcess.method1Desc': { fr: 'Visa, Mastercard, CB. Paiement sécurisé via Gumroad.', ar: 'فيزا، ماستركارد. دفع آمن عبر جومرود.' },
  'purchaseProcess.method2Name': { fr: 'PayPal', ar: 'باي بال' },
  'purchaseProcess.method2Desc': { fr: 'Paiement via votre compte PayPal. Traité par Gumroad ou Squeezy.', ar: 'الدفع عبر حساب باي بال. تتم المعالجة عبر جومرود أو سكويزي.' },
  'purchaseProcess.method3Name': { fr: 'BaridiMob', ar: 'باريدي موب' },
  'purchaseProcess.method3Desc': { fr: 'Paiement mobile algérien. Traitement manuel sous 48h ouvrées.', ar: 'دفع جوال جزائري. معالجة يدوية خلال 48 ساعة عمل.' },
  'purchaseProcess.method4Name': { fr: 'CCP', ar: 'سي سي بي' },
  'purchaseProcess.method4Desc': { fr: 'Virement postal algérien. Traitement manuel sous 48h ouvrées.', ar: 'تحويل بريدي جزائري. معالجة يدوية خلال 48 ساعة عمل.' },
  'purchaseProcess.method5Name': { fr: 'Binance Pay', ar: 'بينانس باي' },
  'purchaseProcess.method5Desc': { fr: 'Paiement en cryptomonnaie via Binance Pay. Traitement automatisé.', ar: 'دفع بالعملات الرقمية عبر بينانس باي. معالجة آلية.' },
  'purchaseProcess.typeInternational': { fr: 'International', ar: 'دولي' },
  'purchaseProcess.typeLocal': { fr: 'Algérie', ar: 'الجزائر' },
  'purchaseProcess.paymentNote': { fr: 'Les paiements par carte bancaire et PayPal sont traités de manière sécurisée via Gumroad ou Squeezy. Les paiements locaux (BaridiMob, CCP) sont validés manuellement dans le cadre du processus commercial.', ar: 'تتم معالجة الدفعات بالبطاقة وباي بال بشكل آمن عبر جومرود أو سكويزي. يتم التحقق من الدفعات المحلية يدويًا.' },
  'purchaseProcess.ctaTitle': { fr: 'Prêt à commencer ?', ar: 'مستعد للبدء؟' },
  'purchaseProcess.ctaDesc': { fr: "Téléchargez la version d'essai gratuite. Testez 14 jours sans engagement. Si le logiciel vous convient, achetez la licence à vie.", ar: 'حمّل النسخة التجريبية المجانية. اختبر 14 يومًا بدون التزام. إذا ناسبك البرنامج، اشترِ الرخصة مدى الحياة.' },
  'purchaseProcess.ctaButton': { fr: "Télécharger l'essai gratuit", ar: 'تحميل النسخة التجريبية' },
  'purchaseProcess.ctaReseller': { fr: 'Devenir Revendeur', ar: 'كن موزعًا' },

  // Footer — additional strings
  'footer.os': { fr: 'Windows OS', ar: 'ويندوز' },
  'footer.version': { fr: 'Version 1.0.0', ar: 'إصدار 1.0.0' },
  'footer.systemName': { fr: 'Orkestrix System', ar: 'نظام أوركيستريكس' },

  // Legal Mentions page
  'legalMentions.titleMeta': { fr: 'Mentions Légales — Orkestrix System Manager', ar: 'إشعارات قانونية — أوركيستريكس' },
  'legalMentions.descMeta': { fr: "Mentions légales d'Orkestrix System Manager, logiciel de gestion des ventes et des stocks. Éditeur, hébergeur, contact.", ar: 'الإشعارات القانونية لنظام أوركيستريكس لإدارة المبيعات والمخزون. الناشر، المستضيف، الاتصال.' },
  'legalMentions.s1Title': { fr: "1. Éditeur du site", ar: '1. ناشر الموقع' },
  'legalMentions.s1P1': { fr: 'Le site Orkestrix System Manager (ci-après « le Site ») est édité par :', ar: 'موقع أوركيستريكس (يشار إليه فيما يلي بـ "الموقع") ينشره:' },
  'legalMentions.s1Li1': { fr: "Nom de l'éditeur : Orkestrix (www.orkestrix.boutique)", ar: 'اسم الناشر : أوركيستريكس (www.orkestrix.boutique)' },
  'legalMentions.s1Li2': { fr: 'Forme juridique : Disponible sur demande', ar: 'الشكل القانوني : متاح عند الطلب' },
  'legalMentions.s1Li3': { fr: 'Capital social : Disponible sur demande', ar: 'رأس المال : متاح عند الطلب' },
  'legalMentions.s1Li4': { fr: 'Adresse : www.orkestrix.boutique', ar: 'العنوان : www.orkestrix.boutique' },
  'legalMentions.s1Li5': { fr: 'Numéro de téléphone : +213 777 82 62 23', ar: 'رقم الهاتف : +213 777 82 62 23' },
  'legalMentions.s1Li6': { fr: 'Adresse e-mail : systemorkestrix@gmail.com', ar: 'البريد الإلكتروني : systemorkestrix@gmail.com' },
  'legalMentions.s1Li7': { fr: "Numéro d'immatriculation : Disponible sur demande", ar: 'رقم التسجيل : متاح عند الطلب' },
  'legalMentions.s1Li8': { fr: 'Numéro de TVA intracommunautaire : Disponible sur demande', ar: 'رقم ضريبة القيمة المضافة : متاح عند الطلب' },
  'legalMentions.s2Title': { fr: '2. Directeur de la publication', ar: '2. مدير النشر' },
  'legalMentions.s2P1': { fr: "Le directeur de la publication est le représentant légal de l'éditeur du Site.", ar: 'مدير النشر هو الممثل القانوني لناشر الموقع.' },
  'legalMentions.s3Title': { fr: '3. Hébergement', ar: '3. الاستضافة' },
  'legalMentions.s3P1': { fr: 'Le Site est hébergé par :', ar: 'الموقع مستضاف بواسطة:' },
  'legalMentions.s3Li1': { fr: "Nom de l'hébergeur : Vercel Inc.", ar: 'اسم المستضيف : فيرسل إنك.' },
  'legalMentions.s3Li2': { fr: "Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis", ar: 'العنوان : 440 N Barranca Ave #4133, Covina, CA 91723, الولايات المتحدة' },
  'legalMentions.s3Li3': { fr: 'Site web : https://vercel.com', ar: 'الموقع : https://vercel.com' },
  'legalMentions.s4Title': { fr: '4. Propriété intellectuelle', ar: '4. الملكية الفكرية' },
  'legalMentions.s4P1': { fr: "L'ensemble du contenu du Site (textes, graphismes, logos, icônes, images, vidéos, etc.) est la propriété exclusive de l'éditeur, sauf mention contraire.", ar: 'جميع محتويات الموقع (نصوص، رسومات، شعارات، أيقونات، صور، فيديوهات...) هي ملكية حصرية للناشر، ما لم يذكر خلاف ذلك.' },
  'legalMentions.s4P2': { fr: 'Toute reproduction, représentation, modification, distribution ou exploitation de tout ou partie du Site, sous quelque forme que ce soit, sans l\'autorisation écrite préalable de l\'éditeur, est strictement interdite.', ar: 'أي نسخ، تمثيل، تعديل، توزيع أو استغلال لجزء من الموقع بأي شكل كان، دون إذن كتابي مسبق من الناشر، محظور تماماً.' },
  'legalMentions.s4P3': { fr: 'Le logiciel Orkestrix System Manager est protégé par les lois sur la propriété intellectuelle. Toute reproduction non autorisée du logiciel constitue une contrefaçon.', ar: 'برنامج أوركيستريكس محمي بقوانين الملكية الفكرية. أي نسخ غير مصرح به للبرنامج يعتبر تزويراً.' },
  'legalMentions.s5Title': { fr: '5. Protection des données', ar: '5. حماية البيانات' },
  'legalMentions.s5P1': { fr: "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, veuillez nous contacter à systemorkestrix@gmail.com.", ar: 'وفقاً للائحة العامة لحماية البيانات (GDPR) وقانون الحاسوب والحريات، لديك حق الوصول وتصحيح وحذف بياناتك الشخصية. لممارسة هذه الحقوق، يرجى الاتصال بنا على systemorkestrix@gmail.com.' },
  'legalMentions.s5P2Before': { fr: "Pour plus d'informations, consultez notre ", ar: 'لمزيد من المعلومات، راجع ' },
  'legalMentions.s5P2After': { fr: '.', ar: '.' },
  'legalMentions.s6Title': { fr: '6. Cookies', ar: '6. ملفات تعريف الارتباط' },
  'legalMentions.s6P1': { fr: "Le Site est susceptible d'utiliser des cookies à des fins de mesure d'audience et d'analyse. Vous pouvez configurer vos préférences en matière de cookies dans les paramètres de votre navigateur.", ar: 'قد يستخدم الموقع ملفات تعريف الارتباط لأغراض قياس الجمهور والتحليل. يمكنك ضبط تفضيلات ملفات تعريف الارتباط في إعدادات المتصفح الخاص بك.' },
  'legalMentions.s7Title': { fr: '7. Limitation de responsabilité', ar: '7. تحديد المسؤولية' },
  'legalMentions.s7P1': { fr: "L'éditeur s'efforce d'assurer l'exactitude des informations publiées sur le Site. Toutefois, l'éditeur ne saurait être tenu responsable des erreurs, omissions ou inexactitudes qui pourraient subsister.", ar: 'يسعى الناشر لضمان دقة المعلومات المنشورة على الموقع. ومع ذلك، لا يمكن تحميل الناشر المسؤولية عن الأخطاء أو السهو أو عدم الدقة التي قد تبقى.' },
  'legalMentions.s7P2': { fr: "Le logiciel Orkestrix System Manager est fourni « en l'état ». L'éditeur ne garantit pas que le logiciel répondra à tous les besoins de l'utilisateur ni qu'il fonctionnera sans interruption ou sans erreur.", ar: 'برنامج أوركيستريكس يُقدم "كما هو". لا يضمن الناشر أن البرنامج سيلبي جميع احتياجات المستخدم أو أنه سيعمل بدون انقطاع أو خطأ.' },
  'legalMentions.s7P3': { fr: "L'éditeur ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du Site ou du logiciel.", ar: 'لا يمكن تحميل الناشر المسؤولية عن الأضرار المباشرة أو غير المباشرة الناتجة عن استخدام الموقع أو البرنامج.' },
  'legalMentions.s8Title': { fr: '8. Droit applicable', ar: '8. القانون المطبق' },
  'legalMentions.s8P1': { fr: "Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du Site sera soumis à la compétence exclusive des tribunaux français.", ar: 'تخضع هذه الإشعارات القانونية للقانون الفرنسي. أي نزاع يتعلق باستخدام الموقع يخضع للاختصاص القضائي الحصري للمحاكم الفرنسية.' },

  // Privacy Policy page
  'privacy.titleMeta': { fr: 'Politique de Confidentialité — Orkestrix System Manager', ar: 'سياسة الخصوصية — أوركيستريكس' },
  'privacy.descMeta': { fr: "Politique de confidentialité d'Orkestrix System Manager. Collecte, traitement et protection de vos données personnelles.", ar: 'سياسة الخصوصية لنظام أوركيستريكس. جمع ومعالجة وحماية بياناتك الشخصية.' },
  'privacy.s1Title': { fr: '1. Collecte des données', ar: '1. جمع البيانات' },
  'privacy.s1P1': { fr: "Nous collectons les données personnelles suivantes lorsque vous utilisez notre site ou nos services :", ar: 'نجمع البيانات الشخصية التالية عند استخدامك لموقعنا أو خدماتنا:' },
  'privacy.s1Li1': { fr: "Données d'identification : nom, prénom, adresse e-mail", ar: 'بيانات التعريف : الاسم واللقب والبريد الإلكتروني' },
  'privacy.s1Li2': { fr: "Données de transaction : informations relatives à l'achat de licence (hors données de paiement, traitées par nos prestataires)", ar: 'بيانات المعاملات : معلومات شراء الرخصة (باستثناء بيانات الدفع التي يعالجها مزودونا)' },
  'privacy.s1Li3': { fr: 'Données de navigation : pages visitées, durée de visite, interactions (via cookies analytiques)', ar: 'بيانات التصفح : الصفحات التي تمت زيارتها، مدة الزيارة، التفاعلات (عبر ملفات تعريف الارتباط التحليلية)' },
  'privacy.s1Li4': { fr: "Données de communication : échanges par e-mail ou formulaire de contact", ar: 'بيانات الاتصال : المراسلات عبر البريد الإلكتروني أو نموذج الاتصال' },
  'privacy.s2Title': { fr: '2. Base légale du traitement', ar: '2. الأساس القانوني للمعالجة' },
  'privacy.s2P1': { fr: 'Le traitement de vos données repose sur les bases légales suivantes :', ar: 'تعتمد معالجة بياناتك على الأسس القانونية التالية:' },
  'privacy.s2Li1': { fr: "Exécution contractuelle : pour la gestion des licences et l'envoi des certificats d'activation", ar: 'التنفيذ التعاقدي : لإدارة التراخيص وإرسال شهادات التفعيل' },
  'privacy.s2Li2': { fr: "Intérêt légitime : pour l'amélioration de nos services et la communication commerciale", ar: 'المصلحة المشروعة : لتحسين خدماتنا والاتصالات التجارية' },
  'privacy.s2Li3': { fr: 'Consentement : pour l\'inscription à la newsletter et les cookies non essentiels', ar: 'الموافقة : للاشتراك في النشرة البريدية وملفات تعريف الارتباط غير الأساسية' },
  'privacy.s3Title': { fr: '3. Finalités du traitement', ar: '3. أهداف المعالجة' },
  'privacy.s3P1': { fr: 'Vos données sont traitées pour les finalités suivantes :', ar: 'تتم معالجة بياناتك للأغراض التالية:' },
  'privacy.s3Li1': { fr: 'Gestion des commandes et délivrance des certificats d\'activation', ar: 'إدارة الطلبات وتسليم شهادات التفعيل' },
  'privacy.s3Li2': { fr: 'Activation et suivi des licences logicielles', ar: 'تفعيل ومتابعة تراخيص البرامج' },
  'privacy.s3Li3': { fr: "Communication relative à l'utilisation du logiciel", ar: 'التواصل المتعلق باستخدام البرنامج' },
  'privacy.s3Li4': { fr: "Envoi d'informations commerciales (newsletter, mises à jour)", ar: 'إرسال المعلومات التجارية (النشرة البريدية، التحديثات)' },
  'privacy.s3Li5': { fr: 'Gestion du programme revendeur', ar: 'إدارة برنامج الموزعين' },
  'privacy.s3Li6': { fr: 'Amélioration du site et du logiciel', ar: 'تحسين الموقع والبرنامج' },
  'privacy.s3Li7': { fr: 'Support technique et assistance', ar: 'الدعم الفني والمساعدة' },
  'privacy.s4Title': { fr: '4. Destinataires des données', ar: '4. مستلمو البيانات' },
  'privacy.s4P1': { fr: "Vos données personnelles sont destinées à l'éditeur du site. Elles peuvent être communiquées aux destinataires suivants :", ar: 'بياناتك الشخصية مخصصة لناشر الموقع. يمكن مشاركتها مع المستلمين التاليين:' },
  'privacy.s4Li1': { fr: 'Prestataires de services de paiement (Gumroad, Squeezy)', ar: 'مزودو خدمات الدفع (جومرود، سكويزي)' },
  'privacy.s4Li2': { fr: 'Hébergeur du site (Vercel Inc.)', ar: 'مستضيف الموقع (فيرسل إنك.)' },
  'privacy.s4Li3': { fr: "Prestataires de services d'e-mail et de notification", ar: 'مزودو خدمات البريد الإلكتروني والإشعارات' },
  'privacy.s4Li4': { fr: 'Autorités compétentes, en cas de réquisition légale', ar: 'السلطات المختصة، في حالة أمر قضائي' },
  'privacy.s4P2': { fr: 'Nous ne vendons ni ne louons vos données personnelles à des tiers.', ar: 'نحن لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة.' },
  'privacy.s5Title': { fr: '5. Durée de conservation', ar: '5. مدة الاحتفاظ' },
  'privacy.s5P1': { fr: "Vos données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :", ar: 'يتم الاحتفاظ ببياناتك للمدة اللازمة للأغراض التي جمعت من أجلها:' },
  'privacy.s5Li1': { fr: "Données contractuelles : pendant toute la durée de la licence et 3 ans après la fin de celle-ci", ar: 'البيانات التعاقدية : طوال مدة الرخصة و 3 سنوات بعد انتهائها' },
  'privacy.s5Li2': { fr: "Données de newsletter : jusqu'au désabonnement", ar: 'بيانات النشرة البريدية : حتى إلغاء الاشتراك' },
  'privacy.s5Li3': { fr: 'Données de navigation : 13 mois maximum', ar: 'بيانات التصفح : 13 شهراً كحد أقصى' },
  'privacy.s5Li4': { fr: 'Données de prospection : 3 ans après le dernier contact', ar: 'بيانات التنقيب : 3 سنوات بعد آخر اتصال' },
  'privacy.s6Title': { fr: '6. Vos droits', ar: '6. حقوقك' },
  'privacy.s6P1': { fr: 'Conformément au RGPD, vous disposez des droits suivants :', ar: 'وفقاً للائحة العامة لحماية البيانات (GDPR)، لديك الحقوق التالية:' },
  'privacy.s6Li1': { fr: "Droit d'accès à vos données personnelles", ar: 'حق الوصول إلى بياناتك الشخصية' },
  'privacy.s6Li2': { fr: 'Droit de rectification des données inexactes', ar: 'حق تصحيح البيانات غير الدقيقة' },
  'privacy.s6Li3': { fr: "Droit à l'effacement (droit à l'oubli)", ar: 'حق المحو (الحق في النسيان)' },
  'privacy.s6Li4': { fr: 'Droit à la limitation du traitement', ar: 'حق تقييد المعالجة' },
  'privacy.s6Li5': { fr: 'Droit à la portabilité de vos données', ar: 'حق نقل البيانات' },
  'privacy.s6Li6': { fr: "Droit d'opposition au traitement", ar: 'حق الاعتراض على المعالجة' },
  'privacy.s6Li7': { fr: 'Droit de retirer votre consentement à tout moment', ar: 'حق سحب موافقتك في أي وقت' },
  'privacy.s6P2': { fr: 'Pour exercer ces droits, contactez-nous à systemorkestrix@gmail.com. Vous disposez également du droit d\'introduire une réclamation auprès de la CNIL.', ar: 'لممارسة هذه الحقوق، اتصل بنا على systemorkestrix@gmail.com. لديك أيضاً الحق في تقديم شكوى إلى هيئة حماية البيانات.' },
  'privacy.s7Title': { fr: '7. Sécurité', ar: '7. الأمان' },
  'privacy.s7P1': { fr: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles, notamment le chiffrement des échanges, le contrôle d'accès et la surveillance continue.", ar: 'ننفذ تدابير تقنية وتنظيمية مناسبة لضمان أمن وسرية بياناتك الشخصية، بما في ذلك تشفير التبادلات والتحكم في الوصول والمراقبة المستمرة.' },
  'privacy.s8Title': { fr: '8. Cookies', ar: '8. ملفات تعريف الارتباط' },
  'privacy.s8P1': { fr: 'Notre site utilise des cookies pour :', ar: 'يستخدم موقعنا ملفات تعريف الارتباط من أجل:' },
  'privacy.s8Li1': { fr: 'Assurer le bon fonctionnement du site (cookies techniques)', ar: 'ضمان حسن سير الموقع (ملفات تعريف الارتباط التقنية)' },
  'privacy.s8Li2': { fr: "Mesurer l'audience et analyser la navigation (cookies analytiques)", ar: 'قياس الجمهور وتحليل التصفح (ملفات تعريف الارتباط التحليلية)' },
  'privacy.s8P2': { fr: "Vous pouvez configurer vos préférences de cookies à tout moment via les paramètres de votre navigateur. Le refus des cookies non essentiels n'affecte pas le fonctionnement du site.", ar: 'يمكنك ضبط تفضيلات ملفات تعريف الارتباط في أي وقت عبر إعدادات المتصفح. رفض ملفات تعريف الارتباط غير الأساسية لا يؤثر على عمل الموقع.' },
  'privacy.s9Title': { fr: '9. Contact', ar: '9. الاتصال' },
  'privacy.s9P1': { fr: 'Pour toute question relative à la présente politique de confidentialité, vous pouvez nous contacter à systemorkestrix@gmail.com.', ar: 'لأي سؤال يتعلق بسياسة الخصوصية هذه، يمكنك الاتصال بنا على systemorkestrix@gmail.com.' },
  'privacy.s10Title': { fr: '10. Modifications', ar: '10. التعديلات' },
  'privacy.s10P1': { fr: 'Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.', ar: 'نحتفظ بالحق في تعديل سياسة الخصوصية هذه في أي وقت. سيتم نشر التعديلات على هذه الصفحة مع تاريخ التحديث.' },

  // CGV page
  'cgv.titleMeta': { fr: "Conditions Générales de Vente — Orkestrix System Manager", ar: 'الشروط العامة للبيع — أوركيستريكس' },
  'cgv.descMeta': { fr: "Conditions générales de vente d'Orkestrix System Manager. Licence à vie, livraison numérique, programme revendeur.", ar: 'الشروط العامة لبيع نظام أوركيستريكس. رخصة مدى الحياة، تسليم رقمي، برنامج الموزعين.' },
  'cgv.s1Title': { fr: "1. Champ d'application", ar: '1. نطاق التطبيق' },
  'cgv.s1P1': { fr: "Les présentes Conditions Générales de Vente (CGV) régissent l'achat de licences du logiciel Orkestrix System Manager (ci-après « le Logiciel ») édité par Orkestrix (www.orkestrix.boutique) (ci-après « l'Éditeur »). Toute commande de licence implique l'acceptation sans réserve des présentes CGV par l'acheteur (ci-après « le Client »).", ar: 'تنظم هذه الشروط العامة للبيع شراء تراخيص برنامج أوركيستريكس (يشار إليه فيما يلي بـ "البرنامج") الذي ينشره أوركيستريكس (www.orkestrix.boutique) (يشار إليه بـ "الناشر"). أي طلب رخصة يعني قبولاً غير مشروط لهذه الشروط من قبل المشتري (يشار إليه بـ "العميل").' },
  'cgv.s2Title': { fr: '2. Produit', ar: '2. المنتج' },
  'cgv.s2P1': { fr: "Orkestrix System Manager est un logiciel de gestion commerciale destiné aux commerces de proximité. Il inclut les modules suivants :", ar: 'أوركيستريكس هو برنامج إدارة تجارية مخصص للمتاجر المحلية. يشمل الوحدات التالية:' },
  'cgv.s2Li1': { fr: 'Point de vente (POS)', ar: 'نقطة البيع' },
  'cgv.s2Li2': { fr: 'Gestion des stocks', ar: 'إدارة المخزون' },
  'cgv.s2Li3': { fr: 'Gestion des achats et fournisseurs', ar: 'إدارة المشتريات والموردين' },
  'cgv.s2Li4': { fr: 'Rapports', ar: 'التقارير' },
  'cgv.s2Li5': { fr: 'Tableaux de bord', ar: 'لوحات التحكم' },
  'cgv.s2Li6': { fr: 'Sauvegarde et export', ar: 'النسخ الاحتياطي والتصدير' },
  'cgv.s2P2': { fr: "Le Logiciel est une application desktop fonctionnant sur le système d'exploitation Windows 10 et 11.", ar: 'البرنامج هو تطبيق سطح مكتب يعمل على نظامي ويندوز 10 و 11.' },
  'cgv.s3Title': { fr: '3. Licence à vie', ar: '3. رخصة مدى الحياة' },
  'cgv.s3P1': { fr: "La licence Orkestrix System Manager est une licence perpétuelle (dite « à vie ») caractérisée par :", ar: 'رخصة أوركيستريكس هي رخصة دائمة (تسمى "مدى الحياة") تتميز بـ:' },
  'cgv.s3Li1': { fr: "Un paiement unique, sans abonnement récurrent", ar: 'دفعة واحدة، بدون اشتراك متكرر' },
  'cgv.s3Li2': { fr: "Une durée d'utilisation illimitée dans le temps", ar: 'مدة استخدام غير محدودة زمنياً' },
  'cgv.s3Li3': { fr: "Les mises à jour du Logiciel incluses pendant la durée de vie de la licence", ar: 'تحديثات البرنامج مشمولة طوال عمر الرخصة' },
  'cgv.s3Li4': { fr: "L'absence de frais de renouvellement", ar: 'عدم وجود رسوم تجديد' },
  'cgv.s3P2': { fr: "La licence est personnelle et non cessible, sauf accord écrit de l'Éditeur.", ar: 'الرخصة شخصية وغير قابلة للتنازل، إلا بموافقة خطية من الناشر.' },
  'cgv.s4Title': { fr: '4. Prix', ar: '4. السعر' },
  'cgv.s4P1': { fr: 'Le prix de la licence est fixé à :', ar: 'سعر الرخصة محدد كالتالي:' },
  'cgv.s4Li1': { fr: "7 250 د.ج — paiement unique", ar: '7 250 د.ج — دفعة واحدة' },
  'cgv.s4P2': { fr: 'Les prix sont indiqués toutes taxes comprises (TTC). Le Client est informé que les taxes applicables peuvent varier en fonction de son pays de résidence.', ar: 'الأسعار شاملة جميع الضرائب. يُعلم العميل أن الضرائب المطبقة قد تختلف حسب بلد إقامته.' },
  'cgv.s5Title': { fr: '5. Modes de paiement', ar: '5. طرق الدفع' },
  'cgv.s5P1': { fr: 'Les modes de paiement acceptés sont les suivants :', ar: 'طرق الدفع المقبولة هي التالية:' },
  'cgv.s5Li1': { fr: 'Paiements internationaux : par carte bancaire via Gumroad ou Squeezy', ar: 'الدفعات الدولية : عن طريق البطاقة البنكية عبر جومرود أو سكويزي' },
  'cgv.s5Li2': { fr: 'Paiements PayPal : via Gumroad ou Squeezy', ar: 'دفعات باي بال : عبر جومرود أو سكويزي' },
  'cgv.s5Li3': { fr: 'Paiements locaux (Algérie) : BaridiMob et CCP — traitement manuel', ar: 'الدفعات المحلية (الجزائر) : باريدي موب وسي سي بي — معالجة يدوية' },
  'cgv.s5Li4': { fr: 'Binance Pay : paiement en cryptomonnaie', ar: 'بينانس باي : دفع بالعملات الرقمية' },
  'cgv.s6Title': { fr: '6. Processus de commande', ar: '6. عملية الطلب' },
  'cgv.s6P1': { fr: "Le processus de commande se déroule comme suit :", ar: 'تتم عملية الطلب على النحو التالي:' },
  'cgv.s6Li1': { fr: "Téléchargement : Le Client télécharge gratuitement la version d'essai du Logiciel depuis le Site.", ar: 'التحميل : يقوم العميل بتحميل النسخة التجريبية مجاناً من الموقع.' },
  'cgv.s6Li2': { fr: "Essai : Le Client peut tester le Logiciel pendant 14 jours sans restriction de fonctionnalités.", ar: 'التجربة : يمكن للعميل اختبار البرنامج لمدة 14 يوماً بدون قيود.' },
  'cgv.s6Li3': { fr: "Commande : Le Client choisit son mode de paiement et procède au règlement.", ar: 'الطلب : يختار العميل طريقة الدفع ويقوم بالدفع.' },
  'cgv.s6Li4': { fr: "Validation : Après vérification du paiement, l'Éditeur délivre le certificat d'activation au Client par e-mail.", ar: 'التأكيد : بعد التحقق من الدفع، يسلم الناشر شهادة التفعيل للعميل عبر البريد الإلكتروني.' },
  'cgv.s6Li5': { fr: "Activation : Le Client active sa licence dans le Logiciel à l'aide du certificat reçu.", ar: 'التفعيل : يقوم العميل بتفعيل رخصته في البرنامج باستخدام الشهادة المستلمة.' },
  'cgv.s7Title': { fr: '7. Livraison', ar: '7. التسليم' },
  'cgv.s7P1': { fr: "La livraison de la licence est effectuée par voie électronique :", ar: 'يتم تسليم الرخصة إلكترونياً:' },
  'cgv.s7Li1': { fr: "Paiements par carte ou PayPal : le certificat d'activation est délivré automatiquement après confirmation du paiement", ar: 'الدفع بالبطاقة أو باي بال : تُسلم شهادة التفعيل تلقائياً بعد تأكيد الدفع' },
  'cgv.s7Li2': { fr: "Paiements locaux (BaridiMob, CCP) : le certificat d'activation est envoyé par e-mail dans un délai maximum de 48 heures ouvrées après confirmation du virement", ar: 'الدفعات المحلية (باريدي موب، سي سي بي) : تُرسل شهادة التفعيل عبر البريد الإلكتروني في غضون 48 ساعة عمل بعد تأكيد التحويل' },
  'cgv.s7Li3': { fr: "Binance Pay : le certificat est envoyé après confirmation de la transaction", ar: 'بينانس باي : تُرسل الشهادة بعد تأكيد المعاملة' },
  'cgv.s8Title': { fr: "8. Droit de rétractation", ar: '8. حق الانسحاب' },
  'cgv.s8P1': { fr: "Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les fournitures de biens ou de services dont le prix dépend de fluctuations du marché financier échappant au contrôle du professionnel.", ar: 'وفقاً للمادة L.221-28 من قانون الاستهلاك، لا يمكن ممارسة حق الانسحاب لتوريد السلع أو الخدمات التي يعتمد سعرها على تقلبات السوق المالية الخارجة عن سيطرة المهني.' },
  'cgv.s8P2': { fr: "Pour les logiciels dématérialisés, le droit de rétractation ne s'applique pas si l'exécution a commencé avec l'accord du Client. L'activation de la licence constitue le début de l'exécution.", ar: 'بالنسبة للبرامج الرقمية، لا ينطبق حق الانسحاب إذا بدأ التنفيذ بموافقة العميل. تفعيل الرخصة يشكل بداية التنفيذ.' },
  'cgv.s9Title': { fr: '9. Garanties', ar: '9. الضمانات' },
  'cgv.s9P1': { fr: "L'Éditeur garantit que le Logiciel fonctionne conformément à sa documentation technique. L'Éditeur s'engage à corriger les anomalies signalées dans des délais raisonnables.", ar: 'يضمن الناشر أن البرنامج يعمل وفقاً لوثائقه الفنية. يتعهد الناشر بتصحيح الأخطاء المبلغ عنها في آجال معقولة.' },
  'cgv.s9P2': { fr: "Le Logiciel est fourni « en l'état ». L'Éditeur ne garantit pas que le Logiciel répondra à l'intégralité des besoins spécifiques du Client ni qu'il fonctionnera sans interruption ou sans erreur dans tous les environnements.", ar: 'يُقدم البرنامج "كما هو". لا يضمن الناشر أن البرنامج سيلبي جميع الاحتياجات الخاصة للعميل أو أنه سيعمل بدون انقطاع أو خطأ في جميع البيئات.' },
  'cgv.s9P3': { fr: "La garantie légale de conformité et la garantie des vices cachés s'appliquent conformément aux articles 1641 et suivants du Code civil.", ar: 'ينطبق الضمان القانوني للمطابقة وضمان العيوب الخفية وفقاً للمواد 1641 وما يليها من القانون المدني.' },
  'cgv.s10Title': { fr: '10. Propriété intellectuelle', ar: '10. الملكية الفكرية' },
  'cgv.s10P1': { fr: "Le Logiciel et l'ensemble de ses composants (code source, interface, documentation, marques) sont la propriété exclusive de l'Éditeur et sont protégés par les lois sur la propriété intellectuelle.", ar: 'البرنامج وجميع مكوناته (الكود المصدري، الواجهة، الوثائق، العلامات التجارية) هي ملكية حصرية للناشر ومحمية بقوانين الملكية الفكرية.' },
  'cgv.s10P2': { fr: "La licence accorde au Client un droit d'utilisation non exclusif et non transférable. Elle ne constitue en aucun cas un transfert de propriété intellectuelle.", ar: 'تمنح الرخصة للعميل حق استخدام غير حصري وغير قابل للتحويل. لا تشكل بأي حال نقلًا للملكية الفكرية.' },
  'cgv.s10P3': { fr: "Le Client s'interdit de :", ar: 'يمتنع على العميل:' },
  'cgv.s10Li1': { fr: "Modifier, adapter, traduire ou créer des œuvres dérivées du Logiciel", ar: 'تعديل أو تكييف أو ترجمة أو إنشاء أعمال مشتقة من البرنامج' },
  'cgv.s10Li2': { fr: "Décompiler, désassembler ou effectuer du reverse engineering", ar: 'فك التجميع أو التفكيك أو إجراء الهندسة العكسية' },
  'cgv.s10Li3': { fr: "Louer, prêter, distribuer ou sous-licencier le Logiciel", ar: 'تأجير أو إعارة أو توزيع أو منح تراخيص فرعية للبرنامج' },
  'cgv.s10Li4': { fr: "Contourner les mécanismes de protection ou de licence", ar: 'تجاوز آليات الحماية أو الترخيص' },
  'cgv.s11Title': { fr: "11. Obligations du Client", ar: '11. التزامات العميل' },
  'cgv.s11P1': { fr: "Le Client s'engage à :", ar: 'يلتزم العميل بـ:' },
  'cgv.s11Li1': { fr: "Utiliser le Logiciel conformément à sa documentation", ar: 'استخدام البرنامج وفقاً لوثائقه' },
  'cgv.s11Li2': { fr: "Ne pas partager son certificat d'activation avec des tiers non autorisés", ar: 'عدم مشاركة شهادة التفعيل مع أطراف ثالثة غير مصرح بها' },
  'cgv.s11Li3': { fr: "Fournir des informations exactes lors de la commande", ar: 'تقديم معلومات دقيقة عند الطلب' },
  'cgv.s11Li4': { fr: "Assurer la sécurité de son installation (antivirus, sauvegardes)", ar: 'ضمان أمان تثبيته (مضاد فيروسات، نسخ احتياطية)' },
  'cgv.s12Title': { fr: '12. Programme Revendeur', ar: '12. برنامج الموزعين' },
  'cgv.s12P1': { fr: "Les revendeurs agréés bénéficient des conditions suivantes :", ar: 'يستفيد الموزعون المعتمدون من الشروط التالية:' },
  'cgv.s12Li1': { fr: "Marge commerciale négociée sur chaque licence vendue", ar: 'هامش ربح تجاري متفاوض عليه لكل رخصة مباعة' },
  'cgv.s12Li2': { fr: "Droit de revente des licences à leurs clients", ar: 'حق إعادة بيع التراخيص لعملائهم' },
  'cgv.s12Li3': { fr: "Droit de déploiement et d'installation chez les clients finaux", ar: 'حق النشر والتثبيت لدى العملاء النهائيين' },
  'cgv.s12Li4': { fr: "Support technique dédié", ar: 'دعم تقني مخصص' },
  'cgv.s12P2': { fr: "L'agrément est accordé après validation du dossier de candidature. Les revendeurs s'engagent à respecter les conditions de vente et les tarifs définis par l'Éditeur. Toute vente par un revendeur non agréé est interdite.", ar: 'يُمنح الاعتماد بعد الموافقة على ملف الترشح. يلتزم الموزعون باحترام شروط البيع والأسعار التي يحددها الناشر. أي بيع من قبل موزع غير معتمد محظور.' },
  'cgv.s13Title': { fr: '13. Données personnelles', ar: '13. البيانات الشخصية' },
  'cgv.s13P1': { fr: "Les données personnelles collectées dans le cadre de la vente sont traitées conformément à notre ", ar: 'تُعالج البيانات الشخصية المجمعة في إطار البيع وفقاً لـ ' },
  'cgv.s13P2': { fr: ". Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données.", ar: '. يحق للعميل الوصول وتصحيح وحذف بياناته.' },
  'cgv.s14Title': { fr: '14. Litiges', ar: '14. المنازعات' },
  'cgv.s14P1': { fr: "Les présentes CGV sont régies par le droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.", ar: 'تخضع هذه الشروط للقانون الفرنسي. في حالة النزاع، يلتزم الطرفان بالبحث عن حل ودي قبل أي إجراء قضائي.' },
  'cgv.s14P2': { fr: "À défaut d'accord amiable, les litiges seront soumis à la compétence exclusive des tribunaux français.", ar: 'في حالة عدم الاتفاق الودي، تخضع النزاعات للاختصاص القضائي الحصري للمحاكم الفرنسية.' },
  'cgv.s14P3': { fr: "Conformément à l'article L.612-1 du Code de la consommation, le Client est informé de la possibilité de recourir à un médiateur de la consommation.", ar: 'وفقاً للمادة L.612-1 من قانون الاستهلاك، يُعلم العميل بإمكانية اللجوء إلى وسيط المستهلك.' },

  // Newsletter
  'newsletter.title': { fr: 'Newsletter Orkestrix', ar: 'النشرة البريدية لأوركيستريكس' },
  'newsletter.description': { fr: 'Recevez les actualités produit, les nouvelles versions, les annonces commerciales et les opportunités partenaires.', ar: 'استلم أخبار المنتج، الإصدارات الجديدة، الإعلانات التجارية وفرص الشراكة.' },
  'newsletter.emailLabel': { fr: 'Email professionnel', ar: 'البريد الإلكتروني المهني' },
  'newsletter.emailPlaceholder': { fr: 'votre@email.com', ar: 'بريدك@email.com' },
  'newsletter.roleLabel': { fr: 'Vous êtes', ar: 'أنت' },
  'newsletter.roleProspect': { fr: 'Prospect', ar: 'مهتم' },
  'newsletter.roleCustomer': { fr: 'Client', ar: 'عميل' },
  'newsletter.roleReseller': { fr: 'Revendeur', ar: 'موزع' },
  'newsletter.roleDistributor': { fr: 'Distributeur', ar: 'موزع معتمد' },
  'newsletter.submitText': { fr: "S'abonner", ar: 'اشتراك' },
  'newsletter.submittingText': { fr: 'Envoi en cours...', ar: 'جاري الإرسال...' },
  'newsletter.successTitle': { fr: 'Inscription confirmée !', ar: 'تم تأكيد الاشتراك!' },
  'newsletter.successText': { fr: 'Merci de votre intérêt pour Orkestrix.', ar: 'شكراً لاهتمامك بأوركيستريكس.' },
  'newsletter.subscribeAgain': { fr: "S'inscrire à nouveau", ar: 'اشتراك مرة أخرى' },
  'newsletter.privacyText': { fr: "Vos données sont traitées conformément à notre politique de confidentialité. Vous pouvez vous désabonner à tout moment.", ar: 'بياناتك تعالج وفقاً لسياسة الخصوصية لدينا. يمكنك إلغاء الاشتراك في أي وقت.' },
  'newsletter.errorMessage': { fr: 'Une erreur est survenue. Veuillez réessayer.', ar: 'حدث خطأ. الرجاء المحاولة مرة أخرى.' },

  // Features / Modules
  'features.title': { fr: 'Modules du logiciel', ar: 'وحدات البرنامج' },
  'features.description': { fr: 'Tout ce dont vous avez besoin pour gérer votre commerce. Sans abonnement.', ar: 'كل ما تحتاجه لإدارة متجرك. بدون اشتراك.' },
  'features.item1Title': { fr: 'Recherche de produits', ar: 'البحث عن المنتجات' },
  'features.item1Desc': { fr: 'Trouvez n\'importe quel produit par nom, code-barres ou catégorie.', ar: 'اعثر على أي منتج بالاسم، الرمز الشريطي أو الفئة.' },
  'features.item2Title': { fr: 'Tableaux de bord', ar: 'لوحات التحكم' },
  'features.item2Desc': { fr: 'Ventes, marges et performances.', ar: 'المبيعات والهوامش والأداء.' },
  'features.item3Title': { fr: 'Achats', ar: 'المشتريات' },
  'features.item3Desc': { fr: 'Bons de commande, réceptions et approvisionnements.', ar: 'أوامر الشراء والاستلام والتوريد.' },
  'features.item4Title': { fr: 'Activité', ar: 'النشاط' },
  'features.item4Desc': { fr: 'Ventes, achats et stock à jour.', ar: 'مبيعات ومشتريات ومخزون محدث.' },
  'features.item5Title': { fr: 'Rapports', ar: 'التقارير' },
  'features.item5Desc': { fr: 'Export Excel de vos données.', ar: 'تصدير بياناتك إلى Excel.' },
  'features.item6Title': { fr: 'Sauvegarde', ar: 'النسخ الاحتياطي' },
  'features.item6Desc': { fr: 'Sauvegardez vos données localement en sécurité.', ar: 'احفظ بياناتك محلياً بأمان.' },

  // NotFound
  'notFound.title': { fr: '404 — Orkestrix System Manager', ar: '404 — أوركيستريكس' },
  'notFound.description': { fr: 'Page non trouvée', ar: 'الصفحة غير موجودة' },
  'notFound.heading': { fr: 'Page non trouvée', ar: 'الصفحة غير موجودة' },
  'notFound.message': { fr: "La page que vous recherchez n'existe pas ou a été déplacée.", ar: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.' },

  // LanguageSwitcher
  'languageSwitcher.switchToArabic': { fr: 'العربية', ar: 'العربية' },
  'languageSwitcher.switchToFrench': { fr: 'Français', ar: 'Français' },
};

export function getTranslations(lang: Language): Record<TranslationKey, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(translations)) {
    result[key] = value[lang];
  }
  return result as Record<TranslationKey, string>;
}

export default translations;
