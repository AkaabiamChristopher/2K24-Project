import React from 'react';

function Gallery() {
    const galleryImages = [
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187773/RJDV6421_vbtwng.jpg',
            alt: 'Students conducting laboratory experiments with concentration and safety goggles',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179723/2025_05_08_19_02_IMG_0929_z9ltly.jpg',
            alt: 'Basketball team celebrating victory with trophy and medals on court',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179737/2025_05_08_19_02_IMG_0931_zlcrct.jpg',
            alt: 'Library study hall with students working individually and in groups',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179656/2025_05_08_19_02_IMG_0876_bcq9cl.jpg',
            alt: 'Art exhibition showcasing student paintings, sculptures, and installations',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179595/2025_05_08_19_02_IMG_0860_oggffo.jpg',
            alt: 'Computer lab with students working on programming projects collaboratively',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179524/2025_05_08_19_02_IMG_0780_cks316.jpg',
            alt: 'Debate competition with passionate speaker at podium and attentive audience',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179518/2025_05_08_19_02_IMG_0737_za2c1b.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179470/2025_05_08_19_02_IMG_0697_xob905.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179367/2025_05_08_19_02_IMG_0359_roslgb.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179320/2025_05_08_19_02_IMG_0354_xbuign.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179461/2025_05_08_19_02_IMG_0379_gkjjdi.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179490/2025_05_08_19_02_IMG_0728_by4kbr.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179516/2025_05_08_19_02_IMG_0749_e1d4na.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179670/2025_05_08_19_02_IMG_0916_qr051t.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179642/2025_05_08_19_02_IMG_0873_dqc0ot.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179526/2025_05_08_19_02_IMG_0838_hlhnax.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179522/2025_05_08_19_02_IMG_0770_qhzbya.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179520/2025_05_08_19_02_IMG_0758_goxbxq.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179191/2025_05_08_19_02_IMG_0190_oyz1xg.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179193/2025_05_08_19_02_IMG_0198_ukm0zl.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179216/2025_05_08_19_02_IMG_0221_ykbwrp.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179297/2025_05_08_19_02_IMG_0349_ryr3ot.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179466/2025_05_08_19_02_IMG_0388_utryft.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179496/2025_05_08_19_02_IMG_0729_ym7uug.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179519/2025_05_08_19_02_IMG_0760_orv8ea.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179521/2025_05_08_19_02_IMG_0765_yhq8jl.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179520/2025_05_08_19_02_IMG_0758_goxbxq.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179496/2025_05_08_19_02_IMG_0729_ym7uug.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179517/2025_05_08_19_02_IMG_0750_wlk85u.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179886/2025_05_08_19_02_IMG_0964_yax05s.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755180181/PBYH7538_kz2s06.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755180085/DUQA5072_kifoyo.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755180040/2025_05_08_19_02_IMG_0992_bbow4z.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179911/2025_05_08_19_02_IMG_0968_n6gduu.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179834/2025_05_08_19_02_IMG_0949_y6l5af.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179789/2025_05_08_19_02_IMG_0941_w272su.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179803/2025_05_08_19_02_IMG_0943_ygkz2p.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179757/2025_05_08_19_02_IMG_0935_ybygq0.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179714/2025_05_08_19_02_IMG_0927_qifhca.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179694/2025_05_08_19_02_IMG_0922_rqo6xb.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179634/2025_05_08_19_02_IMG_0872_ieyr3y.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179616/2025_05_08_19_02_IMG_0867_e1ho6g.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179541/2025_05_08_19_02_IMG_0846_tuttmr.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179551/2025_05_08_19_02_IMG_0851_wjnp7f.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179524/2025_05_08_19_02_IMG_0781_daxewb.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179518/2025_05_08_19_02_IMG_0737_za2c1b.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179513/2025_05_08_19_02_IMG_0731_xxlfqr.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179227/2025_05_08_19_02_IMG_0235_ymtpxe.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179214/2025_05_08_19_02_IMG_0220_vbbjpc.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179207/2025_05_08_19_02_IMG_0214_o5yks7.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179191/2025_05_08_19_02_IMG_0195_iuftok.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179200/2025_05_08_19_02_IMG_0208_zumabt.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179568/2025_05_08_19_02_IMG_0853_be39v9.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187182/OJRD4500_efbtqj.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187333/PXVI2230_gwbxij.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187121/NSPR2947_z5h5dj.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184844/DYVZ4658_mhs01e.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186987/NIZL8135_s0dufe.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186767/MEKP5087_rpplnp.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186670/LZGK0586_mbkmyb.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186506/LLVM1550_abfaho.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184843/DXYZ8800_guycxq.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186433/KNOZ5645_ug8iym.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186262/JNSZ5083_f7eo2n.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186183/JJEW0908_s7mpim.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186188/JJPJ3690_nhd5by.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185666/HVCK6836_xyvoc6.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185719/HZWX7160_bjkfke.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185385/GLPZ3154_fwwqfn.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185236/GFSX3386_ekrjdm.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185193/GFIT4341_mnnsun.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185017/FHKU0611_yhy0lo.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184839/DUVF3734_mntb2f.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184644/CDPF8467_hvzdpa.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184636/BZEA2297_e5otrk.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184411/AUWE5867_kkpsvd.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179543/2025_05_08_19_02_IMG_0848_lntiaj.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179199/2025_05_08_19_02_IMG_0204_xmbdmm.jpg',
            alt: 'Music performance with student orchestra playing in concert hall',
        },
        {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179522/2025_05_08_19_02_IMG_0770_qhzbya.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186641/LRNV2451_javaru.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186619/LORJ2106_psvjlx.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186301/KCPV7308_is0pun.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186278/JTHT7285_vmz0md.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185741/IEYH4441_xcg5rf.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185729/IBJT2440_hpbsln.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185741/IEYH4441_xcg5rf.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185410/GVYZ7463_z2fjmw.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185422/GWEI9424_w4mr92.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185285/GGDF8526_fhckli.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185186/GEXA2534_sdq8jh.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185436/HECR0829_axqcnv.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184976/FAJO2182_z5ewqm.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184863/ECLI4983_m9pxc5.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184853/DYGK7066_qfdrp2.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184839/DUVF3734_mntb2f.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184805/DTFJ8797_a33ckd.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184801/DRZA4773_caoy3m.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184776/DLAJ6569_zhxmk0.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184763/DBQA6401_yzu7it.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184699/CRMX0498_ccbcd4.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184699/CRMX0498_ccbcd4.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185559/HPLV8285_k9wkav.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185185/GDNX3045_k8sfj4.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184996/FDPT0391_rou7yn.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184992/FEQT3886_rjhjme.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184843/DXYZ8800_guycxq.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184634/CBBU8350_ryvefr.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184583/BPPH7875_mnmpdt.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184536/BIGD2729_a91r1r.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184346/AEYW6850_tbwlot.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186763/MDHL9401_xcsuxm.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186756/MDOJ1375_plstns.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186657/LYRO0736_aimxvg.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186506/LHLT8703_zbhbtx.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186272/JUNR2573_anufin.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186169/JFJJ1246_maucfz.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185743/IKJQ9452_kmsf6l.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185555/HLJY5216_h9yvoz.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185046/FRIC3494_wuacx2.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184864/ECQR6443_wm2yqd.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184768/DGXC9144_eug3eg.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184393/AOLN2882_bjcvnu.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184391/ARFP0217_wygcub.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184391/AQYT2060_ztmrjw.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755184366/AGWT1284_kqidvy.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179970/2025_05_08_19_02_IMG_0975_fj0cp6.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179867/2025_05_08_19_02_IMG_0958_jiwb58.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179825/2025_05_08_19_02_IMG_0950_jtvrp5.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179768/2025_05_08_19_02_IMG_0939_cwrhzo.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179756/2025_05_08_19_02_IMG_0934_tutazm.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179670/2025_05_08_19_02_IMG_0916_qr051t.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179642/2025_05_08_19_02_IMG_0873_dqc0ot.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179640/2025_05_08_19_02_IMG_0879_pkgtrr.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179551/2025_05_08_19_02_IMG_0851_wjnp7f.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179517/2025_05_08_19_02_IMG_0750_wlk85u.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179511/2025_05_08_19_02_IMG_0712_r9zdew.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179516/2025_05_08_19_02_IMG_0736_gsnvgy.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179234/2025_05_08_19_02_IMG_0245_nthusk.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179216/2025_05_08_19_02_IMG_0221_ykbwrp.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179222/2025_05_08_19_02_IMG_0230_yd1q48.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179201/2025_05_08_19_02_IMG_0207_feo3k9.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179207/2025_05_08_19_02_IMG_0215_et1jym.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179214/2025_05_08_19_02_IMG_0220_vbbjpc.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179214/2025_05_08_19_02_IMG_0220_vbbjpc.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755179215/2025_05_08_19_02_IMG_0225_wasoqw.jpg    ',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755260401/IMG-20250815-WA0003_xo2kej.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187753/RBRP9498_j7qppk.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187736/QYLR5433_orrvdi.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187584/QNCP0120_ksdxg7.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187281/PBFK8197_nsz1fr.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187251/OUKM3162_bh9kyy.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187156/OBHR1954_wfkzah.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187128/NYQQ9362_ilgwfa.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187112/NSBC2901_id3c3l.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186858/MFEU1905_u9jaxr.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186767/MEKP5087_rpplnp.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186641/LRNV2451_javaru.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186314/KGCX1040_xw1uwt.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186077/IWZU9253_i32boi.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185776/IQWK0633_nic3ss.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185438/HFDL5166_q23smi.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755185194/GEUT4977_viygry.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755187772/RGXX9098_vqmxle.jpg',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        }, {
            src: 'https://res.cloudinary.com/dsznu7kho/image/upload/v1755186965/NCUW5577_rk650h.heic',
            alt: 'Field trip excursion with students exploring nature and taking notes',
        },

        // ...Array.from({ length: 80 }, (_, i) => ({
        //     src: '',
        //     alt: 'Random moment at FGCKD',
        // })),
    ];

    console.log(galleryImages.length);

    return (
        <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold inline-block">Gallery</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A visual journey through life at FGCKD</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer">
                            <a href={image.src} target="_blank" rel="noopener noreferrer">
                                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;