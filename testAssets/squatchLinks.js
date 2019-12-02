module.exports = [
    [
        //0 - Array for the "Best Sellers" dropdown list
        { list: '@bs_dropdown', selector: '@bs_subscription', url: 'https://drsquatch.com/subscription-b' },
        { list: '@bs_dropdown', selector: '@bs_bundle', url: 'https://drsquatch.com/bundles' },
        { list: '@bs_dropdown', selector: '@bs_pineTar', url: 'https://drsquatch.com/shop/product/70702082' },
        { list: '@bs_dropdown', selector: '@bs_bayRum', url: 'https://drsquatch.com/shop/product/70700670' },
        { list: '@bs_dropdown', selector: '@bs_hairKit', url: 'https://drsquatch.com/shop/product/503651566' },
        { list: '@bs_dropdown', selector: '@bs_freshFir', url: 'https://drsquatch.com/shop/product/1727801243' },
        { list: '@bs_dropdown', selector: '@bs_soapSaver', url: 'https://drsquatch.com/shop/product/70698419' },
        { list: '@bs_dropdown', selector: '@bs_bayRumCandle', url: 'https://drsquatch.com/shop/product/2338127926' },
        { list: '@bs_dropdown', selector: '@bs_seeAll', url: 'https://drsquatch.com/collections/best-sellers' }
    ],
    [
        //1 - Array for the "Products" dropdown list
        { list: '@p_dropdown', selector: '@p_barSoaps', url: 'https://drsquatch.com/collections/bar-soap' },
        { list: '@p_dropdown', selector: '@p_showerBoosters', url: 'https://drsquatch.com/collections/shower-boosters' },
        { list: '@p_dropdown', selector: '@p_hair', url: 'https://drsquatch.com/collections/hair-care' },
        { list: '@p_dropdown', selector: '@p_colognes', url: 'https://drsquatch.com/collections/cologne' },
        { list: '@p_dropdown', selector: '@p_beard', url: 'https://drsquatch.com/collections/beard' },
        { list: '@p_dropdown', selector: '@p_shave', url: 'https://drsquatch.com/collections/shave' },
        { list: '@p_dropdown', selector: '@p_candle', url: 'https://drsquatch.com/shop/product/2338127926' },
        { list: '@p_dropdown', selector: '@p_subscription', url: 'https://drsquatch.com/subscription-b' },
        { list: '@p_dropdown', selector: '@p_bundle', url: 'https://drsquatch.com/bundles' },
        { list: '@p_dropdown', selector: '@p_gifts', url: 'https://drsquatch.com/collections/gifts' },
        { list: '@p_dropdown', selector: '@p_gear', url: 'https://drsquatch.com/collections/gear' },
        { list: '@p_dropdown', selector: '@p_allProducts', url: 'https://drsquatch.com/our-products' }
    ],
    [
        //2 - Array for the "Info" dropdown list
        { list: '@i_dropdown', selector: '@i_aboutUs', url: 'https://drsquatch.com/about' },
        { list: '@i_dropdown', selector: '@i_faq', url: 'https://help.drsquatch.com/' },
        { list: '@i_dropdown', selector: '@i_contact', url: 'https://drsquatch.com/contact' },
        { list: '@i_dropdown', selector: '@i_wholesale', url: 'https://drsquatch.com/wholesale' }
    ],
    [
        //3 - Array for the links on the main page header/top sections
        { list: '@h_faqHeader', selector: '@h_faqHeader', url: 'https://help.drsquatch.com/' },
        { list: '@h_login', selector: '@h_login', url: 'https://drsquatch.com/customer/login' },
        { list: '@h_quizTop', selector: '@h_quizTop', url: 'https://drsquatch.com/quiz' },
        { list: '@h_subscribeLinkHeader', selector: '@h_subscribeLinkHeader', url: 'https://drsquatch.com/subscription-b' },
        { list: '@h_subscribeButtonTop', selector: '@h_subscribeButtonTop', url: 'https://drsquatch.com/subscription-b' }
    ],
    // [
    //The test is not designed to handle page scrollers     
    //4 - Array for the main page scroller section
    //     { list: '@h_subscribeButtonScroller', selector: '@h_subscribeButtonScroller', url: 'https://drsquatch.com/subscription-b' },
    //     { list: '@h_soapScroller', selector: '@h_soapScroller', url: 'https://drsquatch.com/collections/bar-soap' },
    //     { list: '@h_cologneScroller', selector: '@h_cologneScroller', url: 'https://drsquatch.com/collections/cologne' },
    //     { list: '@h_hairScroller', selector: '@h_hairScroller', url: 'https://drsquatch.com/collections/hair-care' }
    // ],
    [
        //5 - Array for the main page "Collections" section
        { list: '@h_subscribePictureCollections', selector: '@h_subscribePictureCollections', url: 'https://drsquatch.com/subscription-b' },
        { list: '@h_subscribeButtonCollections', selector: '@h_subscribeButtonCollections', url: 'https://drsquatch.com/subscription-b' },
        { list: '@h_bundlesPictureCollections', selector: '@h_bundlesPictureCollections', url: 'https://drsquatch.com/bundles' },
        { list: '@h_bundlesButtonCollections', selector: '@h_bundlesButtonCollections', url: 'https://drsquatch.com/bundles' },
        { list: '@h_soapPictureCollections', selector: '@h_soapPictureCollections', url: 'https://drsquatch.com/collections/bar-soap' },
        { list: '@h_soapButtonCollections', selector: '@h_soapButtonCollections', url: 'https://drsquatch.com/collections/bar-soap' },
        { list: '@h_hairPictureCollections', selector: '@h_hairPictureCollections', url: 'https://drsquatch.com/collections/hair-care' },
        { list: '@h_hairButtonCollections', selector: '@h_hairButtonCollections', url: 'https://drsquatch.com/collections/hair-care' },
        { list: '@h_colognePictureCollections', selector: '@h_colognePictureCollections', url: 'https://drsquatch.com/collections/cologne' },
        { list: '@h_cologneButtonCollections', selector: '@h_cologneButtonCollections', url: 'https://drsquatch.com/collections/cologne' },
        { list: '@h_shavePictureCollections', selector: '@h_shavePictureCollections', url: 'https://drsquatch.com/collections/shave' }
    ],
    // [
    //     //6 - Array for the main page display sections
    //     { list: '@h_subscribeLinkMain', selector: '@h_subscribeLinkMain', url: 'https://drsquatch.com/subscription-b' },
    //     { list: '@h_subscribePictureMain', selector: '@h_subscribePictureMain', url: 'https://drsquatch.com/subscription-b' },
    //     { list: '@h_quizMain', selector: '@h_quizMain', url: 'https://drsquatch.com/quiz' },
    //     { list: '@h_aboutMain', selector: '@h_aboutMain', url: 'https://drsquatch.com/about' }
    // ],
    [
        //7 - Array for the main page bottom section
        { list: '@h_soapLinkBottom', selector: '@h_soapLinkBottom', url: 'https://drsquatch.com/collections/bar-soap' },
        { list: '@h_subscribeLinkBottom', selector: '@h_subscribeLinkBottom', url: 'https://drsquatch.com/subscription-b' },
        { list: '@h_bundlesLinkBottom', selector: '@h_bundlesLinkBottom', url: 'https://drsquatch.com/bundles' },
        //BUG: the Shower Booster link at the bottom of the page takes you to the shower saver product page instead of the Shower Booster collection page.
        // { list: '@h_showerBoosterLinkBottom', selector: '@h_showerBoosterLinkBottom', url: 'https://drsquatch.com/collections/shower-boosters' },
        { list: '@h_hairLinkBottom', selector: '@h_hairLinkBottom', url: 'https://drsquatch.com/collections/hair-care' },
        { list: '@h_giftsLinkBottom', selector: '@h_giftsLinkBottom', url: 'https://drsquatch.com/collections/gifts' },
        { list: '@h_aboutLinkBottom', selector: '@h_aboutLinkBottom', url: 'https://drsquatch.com/about' },
        { list: '@h_quizLinkBottom', selector: '@h_quizLinkBottom', url: 'https://drsquatch.com/quiz' },
        { list: '@h_wholesaleLinkBottom', selector: '@h_wholesaleLinkBottom', url: 'https://drsquatch.com/wholesale' },
        { list: '@h_blogLinkBottom', selector: '@h_blogLinkBottom', url: 'http://blog.drsquatch.com/' },
        { list: '@h_contactLinkBottom', selector: '@h_contactLinkBottom', url: 'https://drsquatch.com/contact' },
        { list: '@h_faqLinkBottom', selector: '@h_faqLinkBottom', url: 'https://help.drsquatch.com/' },
        { list: '@h_shippingLinkBottom', selector: '@h_shippingLinkBottom', url: 'https://drsquatch.com/shipping' },
        { list: '@h_returnsLinkBottom', selector: '@h_returnsLinkBottom', url: 'https://drsquatch.com/returns' },
        { list: '@h_termsLinkBottom', selector: '@h_termsLinkBottom', url: 'https://drsquatch.com/terms' },
        //The Faq button at the bottom of the page actually opens a new tab, so cannot be used in this test.
        // { list: '@h_faqButtonBottom', selector: '@h_faqButtonBottom', url: 'https://help.drsquatch.com/' },
        { list: '@h_subscribeButtomBottom', selector: '@h_subscribeButtomBottom', url: 'https://drsquatch.com/subscription-b' }
    ]
]