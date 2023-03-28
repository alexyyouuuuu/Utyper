var current_page = "index";
var observer;
var current_theme;

//divs to color
var background_color_divs = [];
var lightbg_color_divs = [];
var title_color_divs = [];
var text_color_divs = [];

//index divs
var prompt_div; 
var button;
var next_button;
var button_40;
var button_20;
var button_10;
var button_quote;
var wpm_div;
var accuracy_div;

//settings divs
var theme_heading;
var nautical;
var dim;
var matrix;
var rasberryRose;
var forest;
var liveWPMButton;
var livePercentButton;
var trueTypingButton;
var noErrorButton;
var noBackspaceButton;

//target divs
var target1;
var target2;
var target3;
var target4;
var target5;
var continue_Button;

//target typing div
var targets;

//arrays
var character_element_array = [];
var cursor_element_array = [];
var first_try = [];
var first_try_correct = [];

//booleans
var focused_on_input = false;
var typing = false;
var showing_results = false;
var quotes = false;

//time
var typing_start_time;
var typing_end_time;
var timer_interval;
var time_taken;
var seconds = 0;

//text
var total_word_length = 20;
var typed_text = "";
var word_list = "";
var characters_typed = 0;
var characters_correct_first_try = 0;
var t100_txt = "";
var superCommon_txt = "";
var common_txt = "";

//blinking
var blinker_interval;
var current_blink = "none";

//color
var background_color;
var light_bg_color;
var title_color;
var text_color;
var alt_text_color;

//display
var liveWPM = false;
var livePercent = false;
var trueTyping = false;

//testing settings
var noError = false;
var noBackspace = false;

//target vars
var target_focus = 0;
var target_characters = [" ", " ", " ", " ", " "];
