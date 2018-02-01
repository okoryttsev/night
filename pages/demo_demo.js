


        var log = 'blablatest',
        pass = 'qwerty123';

        var demo =  {
          pause: function(time) {
            this.api.pause(time);
            return this;
          },

          _login_root: function(){
            var _app = this.visibleSet('@LoginInput',log)
              .visibleSet('@PassInput',pass)
              .clickIcon('@LoginButton')
              .waitForElementVisible('@LoggedInNickName');
            return(_app);
          },
        };

        module.exports = {
          url:'http://kiev.com.ua/forum/login.php',

          commands: [demo],
          elements: {
            LoginInput: {
              selector: '[id="navbar_username"]'
            },
            PassInput: {
              selector: '[id="navbar_password"]'
            },
            LoginButton: {
              selector: '[class="button"][value="Вход"]'
            },
            ProfileNotes: {
              selector: '[id="username_box"] [style="display: inline"]'
            },
            FirstTopic: {
              selector: '[id="collapseobj_forumbit_69"] tr:nth-child(1)>[id] a'
            },
            SecondTopic: {
              selector: '[id="collapseobj_forumbit_69"] [href*="114"]'
            },
            ThirdTopic: {
              selector: '[id*="115"] [href*="115"] strong'
            },
            ThirdTopicTitle: {
              selector: '[id="f141"] [href*="141"] strong'
            },
            SecondTopicTitle: {
              selector: '[id*="268"] [href*="268"] strong'
            },
            FirstTopicTitle: {
              selector: '[class="tcat"] [class="normal"]'
            },
            LoggedInNickName: {
              selector: '//*[@ class="alt2"]//*[@class="smallfont"]//*[text()="blablatest"]',
              locateStrategy: 'xpath'
            },
            LogedOut: {
              selector: '[class="vbmenu_control"] [onclick*="return log_out"]'
            },
          }
        };