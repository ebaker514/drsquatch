var commands = {
    clickMedia: function (social) {
        this
            .waitForElementPresent('body')
        social.forEach(option => {
            this
                .useXpath()
                .waitForElementVisible(`(//i[@class="fa fa-${option.link}"])[1]`)
                .click(`(//i[@class="fa fa-${option.link}"])[1]`)
        })
        return this
    },
    linkClick: function (array) {
        array.forEach(data => {
            this
                .waitForElementPresent(data.selector)
                //The page must fully load before moveToElement will work. If the page doesn't work try increasing the pause time.
                .pause(2000)
                .moveToElement(data.list, 3, 3)
                .waitForElementVisible(data.selector)
                .click(data.selector)
                .waitForElementPresent('body')
                .verify.urlEquals(data.url)
                .api.back()
            return this
        })
    }
}

module.exports = {
    url: 'https://drsquatch.com/',
    commands: [commands],
    elements: {
        facebookTop: {
            selector: '(//i[@class="fa fa-facebook-official"])[1]',
            locateStrategy: 'xpath'
        },
        facebookBottom: {
            selector: '(//i[@class="fa fa-facebook-official"])[2]',
            locateStrategy: 'xpath'
        },
        twitterTop: {
            selector: '(//i[@class="fa fa-twitter-square"])[1]',
            locateStrategy: 'xpath'
        },
        twitterBottom: {
            selector: '(//i[@class="fa fa-twitter-square"])[2]',
            locateStrategy: 'xpath'
        },
        instagramTop: {
            selector: '(//i[@class="fa fa-instagram"])[1]',
            locateStrategy: 'xpath'
        },
        instragramBottom: {
            selector: '(//i[@class="fa fa-instagram"])[2]',
            locateStrategy: 'xpath'
        },
        youtubeTop: {
            selector: '(//i[@class="fa fa-youtube"])[1]',
            locateStrategy: 'xpath'
        },
        youtubeBottom: {
            selector: '(//i[@class="fa fa-youtube"])[2]',
            locateStrategy: 'xpath'
        },
        //BEST SELLERS DROPDOWN///////////////////////////////////////////////////////////////////////////////////////////////////////        
        bs_result: '.heading.product-page.add-lines',
        subscribeResult: '#first',
        bundleResult: '#first',
        bs_dropdown: {
            selector: '(//i[@class="fa fa-angle-down"])[1]',
            locateStrategy: 'xpath'
        },
        bs_subscription: {
            selector: '(//li/ul/li/a[@href="/subscription"])[1]',
            locateStrategy: 'xpath'
        },
        bs_bundle: {
            selector: '(//li/ul/li/a[@href="/bundles"])[1]',
            locateStrategy: 'xpath'
        },
        bs_pineTar: {
            selector: '//a[@href="/shop/product/70702082"]',
            locateStrategy: 'xpath'
        },
        bs_bayRum: {
            selector: '//a[@href="/shop/product/70700670"]',
            locateStrategy: 'xpath'
        },
        bs_hairKit: {
            selector: '//a[@href="/shop/product/503651566"]',
            locateStrategy: 'xpath'
        },
        bs_freshFir: {
            selector: '//a[@href="/shop/product/1727801243"]',
            locateStrategy: 'xpath'
        },
        bs_soapSaver: {
            selector: '//li/ul/li/a[@href="/shop/product/70698419"]',
            locateStrategy: 'xpath'
        },
        bs_bayRumCandle: {
            selector: '(//a[@href="/shop/product/2338127926"])[1]',
            locateStrategy: 'xpath'
        },
        bs_seeAll: {
            selector: '//a[@href="/collections/best-sellers"]',
            locateStrategy: 'xpath'
        },
        //PRODUCTS DROPDOWN///////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        p_dropdown: {
            selector: '(//i[@class="fa fa-angle-down"])[2]',
            locateStrategy: 'xpath'
        },
        p_results: 'hgroup',
        p_barSoaps: {
            selector: '//li/ul/li/a[@href="/collections/bar-soap"]',
            locateStrategy: 'xpath'
        },
        p_showerBoosters: {
            selector: '//li/ul/li/a[@href="/collections/shower-boosters"]',
            locateStrategy: 'xpath'
        },
        p_hair: {
            selector: '//li/ul/li/a[@href="/collections/hair-care"]',
            locateStrategy: 'xpath'
        },
        p_colognes: {
            selector: '//li/ul/li/a[@href="/collections/cologne"]',
            locateStrategy: 'xpath'
        },
        p_beard: {
            selector: '(//li/a[@href="/collections/beard"])',
            locateStrategy: 'xpath'
        },
        p_shave: {
            selector: '(//li/a[@href="/collections/shave"])',
            locateStrategy: 'xpath'
        },
        p_candle: {
            selector: '(//a[@href="/shop/product/2338127926"])[2]',
            locateStrategy: 'xpath'
        },
        p_subscription: {
            selector: '(//li/ul/li/a[@href="/subscription"])[2]',
            locateStrategy: 'xpath'
        },
        p_bundle: {
            selector: '(//li/ul/li/a[@href="/bundles"])[2]',
            locateStrategy: 'xpath'
        },
        p_gifts: {
            selector: '(//li/a[@href="/collections/gifts"])',
            locateStrategy: 'xpath'
        },
        p_gear: {
            selector: '(//li/a[@href="/collections/gear"])',
            locateStrategy: 'xpath'
        },
        p_allProducts: {
            selector: '(//li/a[@href="/our-products"])',
            locateStrategy: 'xpath'
        },
        //INFO DROPDOWN///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        i_dropdown: {
            selector: '(//i[@class="fa fa-angle-down"])[3]',
            locateStrategy: 'xpath'
        },
        i_aboutUs: {
            selector: '(//a[@href="/about"])[1]',
            locateStrategy: 'xpath'
        },
        i_faq: {
            selector: '(//a[@href="https://help.drsquatch.com/"])[1]',
            locateStrategy: 'xpath'
        },
        i_contact: {
            selector: '(//a[@href="/contact"])[1]',
            locateStrategy: 'xpath'
        },
        i_wholesale: {
            selector: '(//a[@href="/wholesale"])[1]',
            locateStrategy: 'xpath'
        },
        //Other Buttons on the home page//////////////////////////////////////////////////////////////////////////////////////
        //Header and Top sections///////////////////////////////////////////////////////////////////////////////////////
        h_faqHeader: {
            selector: '(//a[@href="/faq"])[1]',
            locateStrategy: 'xpath'
        },
        h_login: {
            selector: '//a[@href="/customer/login"]',
            locateStrategy: 'xpath'
        },
        h_quizTop: {
            selector: '(//a[@href="/quiz"])[1]',
            locateStrategy: 'xpath'
        },
        h_subscribeLinkHeader: {
            selector: '(//a[@href="/subscription"])[1]',
            locateStrategy: 'xpath'
        },
        h_subscribeButtonTop: {
            selector: '(//a[@href="/subscription"])[4]',
            locateStrategy: 'xpath'
        },
        //Scroller section//////////////////////////////////////////////////////////////////////////////////////////////
        h_subscribeButtonScroller: {
            selector: '(//a[@href="/subscription"])[5]',
            locateStrategy: 'xpath'
        },
        h_soapScroller: {
            selector: '(//a[@href="/collections/bar-soap"])[2]',
            locateStrategy: 'xpath'
        },
        h_cologneScroller: {
            selector: '(//a[@href="/collections/cologne"])[2]',
            locateStrategy: 'xpath'
        },
        h_hairScroller: {
            selector: '(//a[@href="/collections/hair-care"])[2]',
            locateStrategy: 'xpath'
        },
        //"The Squatch Collection" section/////////////////////////////////////////////////////////////////////////////////
        h_subscribePictureCollections: {
            selector: '(//a[@href="/subscription"])[6]',
            locateStrategy: 'xpath'
        },
        h_subscribeButtonCollections: {
            selector: '(//a[@href="/subscription"])[7]',
            locateStrategy: 'xpath'
        },
        h_bundlesPictureCollections: {
            selector: '(//a[@href="/bundles"])[3]',
            locateStrategy: 'xpath'
        },
        h_bundlesButtonCollections: {
            selector: '(//a[@href="/bundles"])[4]',
            locateStrategy: 'xpath'
        },
        h_soapPictureCollections: {
            selector: '(//a[@href="/collections/bar-soap"])[3]',
            locateStrategy: 'xpath'
        },
        h_soapButtonCollections: {
            selector: '(//a[@href="/collections/bar-soap"])[4]',
            locateStrategy: 'xpath'
        },
        h_hairPictureCollections: {
            selector: '(//a[@href="/collections/hair-care"])[3]',
            locateStrategy: 'xpath'
        },
        h_hairButtonCollections: {
            selector: '(//a[@href="/collections/hair-care"])[4]',
            locateStrategy: 'xpath'
        },
        h_colognePictureCollections: {
            selector: '(//a[@href="/collections/cologne"])[3]',
            locateStrategy: 'xpath'
        },
        h_cologneButtonCollections: {
            selector: '(//a[@href="/collections/cologne"])[4]',
            locateStrategy: 'xpath'
        },
        h_shavePictureCollections: {
            selector: '(//a[@href="/collections/shave"])[2]',
            locateStrategy: 'xpath'
        },
        //Main Display sections/////////////////////////////////////////////////////////////////////////////////////////////////////
        h_subscribeLinkMain: {
            selector: '(//a[@href="/subscription/"])[1]',
            locateStrategy: 'xpath'
        },
        h_subscribePictureMain: {
            selector: '(//a[@href="/subscription/"])[2]',
            locateStrategy: 'xpath'
        },
        h_quizMain: {
            selector: '(//a[@href="/quiz"])[2]',
            locateStrategy: 'xpath'
        },
        h_aboutMain: {
            selector: '(//a[@href="/about"])[2]',
            locateStrategy: 'xpath'
        },
        //Bottom section////////////////////////////////////////////////////////////////////////////////////////////////
        h_soapLinkBottom: {
            selector: '(//a[@href="/collections/bar-soap"])[5]',
            locateStrategy: 'xpath'
        },
        h_subscribeLinkBottom: {
            selector: '(//a[@href="/subscription"])[9]',
            locateStrategy: 'xpath'
        },
        h_bundlesLinkBottom: {
            selector: '(//a[@href="/bundles"])[5]',
            locateStrategy: 'xpath'
        },
        h_showerBoosterLinkBottom: {
            selector: '(//a[@href="/shop/product/70698419"])[2]',
            locateStrategy: 'xpath'
        },
        h_hairLinkBottom: {
            selector: '(//a[@href="/collections/hair-care"])[5]',
            locateStrategy: 'xpath'
        },
        h_giftsLinkBottom: {
            selector: '(//a[@href="/collections/gifts"])[2]',
            locateStrategy: 'xpath'
        },
        h_aboutLinkBottom: {
            selector: '(//a[@href="/about"])[3]',
            locateStrategy: 'xpath'
        },
        h_quizLinkBottom: {
            selector: '(//a[@href="/quiz"])[3]',
            locateStrategy: 'xpath'
        },
        h_wholesaleLinkBottom: {
            selector: '(//a[@href="/wholesale"])[2]',
            locateStrategy: 'xpath'
        },
        h_blogLinkBottom: {
            selector: '//a[@href="http://blog.drsquatch.com"]',
            locateStrategy: 'xpath'
        },
        h_contactLinkBottom: {
            selector: '(//a[@href="/contact"])[2]',
            locateStrategy: 'xpath'
        },
        h_faqLinkBottom: {
            selector: '(//a[@href="https://help.drsquatch.com/"])[2]',
            locateStrategy: 'xpath'
        },
        h_shippingLinkBottom: {
            selector: '//a[@href="/shipping"]',
            locateStrategy: 'xpath'
        },
        h_returnsLinkBottom: {
            selector: '//a[@href="/returns"]',
            locateStrategy: 'xpath'
        },
        h_termsLinkBottom: {
            selector: '//a[@href="/terms"]',
            locateStrategy: 'xpath'
        },
        h_faqButtonBottom: {
            selector: '(//a[@href="/faq"])[2]',
            locateStrategy: 'xpath'
        },
        h_subscribeButtomBottom: {
            selector: '(//a[@href="/subscription"])[10]',
            locateStrategy: 'xpath'
        },
    }
}