$(function () {

// スムーススクロール
  // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false; 
    });

// to-topとside-menuのフェードインアウト
    var pagetop = $('#to-top');
    var fadein = $('#to-top, #side-menu');

    fadein.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            fadein.fadeIn();
        } else {
            fadein.fadeOut();
        }
    });


// to-top スクロール
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });


// よくあるご質問のクリックイベント
    $(".faq__list__item__contents").on("click", function () {
        $(this).next('.answer').slideToggle(); // 以降の要素を実行する
        $(this).toggleClass("open");
    });
  
// ページ読み込み完了時にバナーのブロックを表示
    window.onload = function(){
    $("#overview").show();  
    }
    /* ×ボタンが押されたとき、バナーブロックを非表示 */
    $("#close").on("click", function(){
        $("#overview").hide();
    });
});
