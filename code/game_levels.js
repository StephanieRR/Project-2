var GAME_LEVELS = [
  ["o                                                                            x     ",
   "x          x!xxx!x                                                           x     ",
   "x          xv   vx                                                           x     ",
   "x          x  o  x                                                     o     x     ",
   "x  m       !     x                 xxxx!!!!xxxx                        xx    x     ",
   "!=         !  o  x            b    x   v  v !          xx  y   xx    x!!x    x     ",
   "x  y       !     x                 x        x             y        x!!!!x    x     ",
   "xx         x     x           yyy                          x!!!!!!!!!!!!xx    x     ",
   "x             x  x                      o               xxxxxxxxxxxxxxxxx  x x     ",
   "x                x                              o                        x   x     ",
   "x       o o                       o                                     ox   x     ",
   "!      xxxxxx              o        x         xxxxxx                     x   x     ",
   "! @             xxxx     x!x    x   x                                  xxx   x     ",
   "xxxo              ox     x                   o o o  x                   !    x     ",
   "  xx=             oxhxx!!xo  x!!!!xzzzzzxzzzzzzzzzzzx x       x!!x      !  o x     ",
   "  x          xxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxx     xxxxxxxx |xxxxxxxxxx     ",
   "  x!!!!!!!!!!x                                       m     x     xh!!x             ",
   "  x!!!!!!!!!!x   o             o o o           o  o  o     x     xxxxx             ",
   "  xxxxxxxxxxxx         o   o                               x                       ",
   "                                             oxxxxxxxxx!!xxx                       ",
   "     x x         x             xxxxx        xx        xxxx                         ",
   "                    xxxx  xxxhx    xxx|    xxx                                     ",
   "     x x                            x!!!xxxxxx                                     ",
   "     x!x                            x!!!!xxxxx                                     ",
   "                                                                                   "],
  ["                                      x!!x                        x                                          x!x  ",
   "                                      x!!x                        x        o                                 x!x  ",
   "                           o o        x!!x      o             xxxxx!!!!!xxxxx                                x!x  ",
   "                                      x!!!!!!!!!x            xx    !!!!!    xxxx                             x!x  ",
   "                          xxxxxxx     xxxxxxxxxxx    xxxxxxxxx  o  !!!!!  o    xx                 o   o   o  x!x  ",
   "           o                    xx                                 !!!!!            x                 b     xx!x  ",
   " o                               x                                 !!!!!                        xyyyyyyyyyyyx!!x  ",
   "!x         x            zz       x                   o          xxx!!!!!    o           xxx     x!!!!!!!!!!!!!xx  ",
   "!x    o                       o  x                                 !!!!!    x           x!x     xxxxxxxxxxxx!!x   ",
   "!x   xx!!!!!!!!!x                x          m     x      x         !!!!!   xx            v                  !!x   ",
   "!x   x!!!!!!!!!x x o          x  x          xxx              x xxxxxxxxxxxxx      h                         !!x   ",
   "!x   x!!!!!!!xx   xx            xx                   x                           xxx         xxx            !!x   ",
   "!x   xxxxxxxxx  o  xx           xx       x!!!!!!!!!!!x                                       xx             !!xxxx",
   "|           !xx    xxx          x                                          o  x              x          o   !!!!!!",
   "                     x o              x                          o                           x      x       xx!!!!",
   "                     xxx                   zzzzxx            o             o                ox               x!!xx",
   "                               o               x          o      x       x                  xx        xxxxx   !!  ",
   "                              xxx              x             x       xx  x o   o             x   x    x o x   !!  ",
   "     o      xxxx                x     o        x          x              x   xxxxxxxxx       x            x   !!  ",
   "             x           yyy    xx!!!xx        x                         x y x               x           xx   !!  ",
   "   @    yy   x                  xxxxx          x     yyy                 x!!!x               x                !!  ",
   "             x                  x              x                         xxxxx   xxxxxx  x  ox                !!  ",
   " o           x         h        x              xm                              o x!!!       xx                !!  ",
   "!xxx x!!!!!!!xxxxxx!xxxx!!!!!xxxo     xxx!!!!!!xx    x!!!!!!!!!!           =     x!!!       ox       xx       !!  ",
   "!!!x  x!!!!!x     o    x!!!!!x                       x!!!!!!!x!!         xxxxxxxxxxxx  o o  xx                !!  ",
   "!!!x   xxxxxx          x!!!!!x    xx     o o o      xx!!!!!!xx!!                           xxx                !!  ",
   "!!!xx                  x!!!!!x    x                xx!!!!!!xx !!                      yyyyyxxx                !!  ",
   "!!!!x    o        o    x!!!!!x         xxxxxxxxxxxxx!!!!!!xx  !!                    xx                        !!  ",
   "!!!!xxxxxxxxxx  xzzz   x!!!!!!         o!!!!!!!!!!!!!!!!!xx   !!              o    x                          !!  ",
   "!!!!!!!!!!!!!x!!!!!!!!!x!!!!!!!xx!!!!xxx!!!!!!!!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!xxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                       x!x                                                                    ",
   "!!xo            o                      x!x                                                                    ",
   "!!!xx                                   v                                                               m     ",
   "!!!!!xx                                                                                                       ",
   "!!!!!!!xx                                                                                               x     ",
   "!!!!!!!!!xx   xx  xxxx  xx   xxxxxx     o                                     o                               ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                   x                                       ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx             xx                                                            ",
   "    x                                                    x                                 o xxxxxxxxxxxxxxxxx",
   "    x        o       o       o          o                       x                   x              x          ",
   "    x                                                                       o                      o          ",
   "    x                               xx!   !xx                                              xxxxxxxxxxxxx      ",
   "    x                               x!! o !!x         xxx        o         xxx                         x      ",
   "    x                             o x!!   !!x           xx             x                      o  o   xx    o  ",
   "    xo    m  x!!xx!!!xx!!xx!!x      xxx o xxx             xx    o o    x                  xxxxxxxxxxxx        ",
   "    x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x       x         x  yyyyy   x       xx         x                   ",
   "    xxx                               x o x                 x!!!!!!!!!!x            xxx!!!x           o       ",
   "                                 =    x   x  o  h   o      mxxxxxxxxxxxx            x xxxxxx o xxxxxxxxxxxxxxx",
   "                                      x o x   xxx            x                      x                         ",
   "                o                     x   x  yx         xxxxxx                      x                o        ",
   "                                      x o x   x     x     xxxx              b     xxx        x       z        ",
   "                                      x   x   x           o xx                   x                            ",
   "!!!!!!!xxx                            x o x o x       xxxxxxxx        xxxxxxxxxxxx                            ",
   " v                       xxxxx        x   x   x       x           m                    o                 x    ",
   "                     y       x          o x   x       x           x!!!!!!                    o      m         ",
   "                             x            x x xx      x           xxxxx!!                                     ",
   "              xzzz           xxxxx        x!!!!xo    xx             o x!!    o         x            x         ",
   "                             x       x    xxxxxx      x               x!!                                     ",
   "=                            x!!!!!!!xxxx!xx          x      y        x!!                     x               ",
   "                             xxxxxxxxxxxxxxx          x!!!!!!!!!!xxxxxx!!x         h                          ",
   "                             xxxx   o  xxxxx    x!!!!!x!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    x     ",
   "       xxxxxxxxxxxxxxxxxxx!!!xx            x   xxxxxxxxxxxxxxxxxxxxxxxx                                 x  o  ",
   "   @                     xhxhxx            x                        x                                   xh   h",
   "  xxx         o      o   x    x     x      x                        x o                                 xxxxxx",
   "  xm                     x o  x  y  x       x             o         xxxxxx            xxxxxxxxxxxxxxxxxxxxxx  ",
   "  x    xxxxxxxxxxxxxxxxxxx    x     x       xxxxx                        xxxx         x        |           x  ",
   "  x                           x     x                                    x            x                    x  ",
   "  x       o          o     o =x     x     b                              x            x                    x  ",
   "  xxxxxxxxxxx    xxxxxxxxxxxxxx  x  xx             yyyy|  x |yyyy         x o     x o x                    x  ",
   "  x                                 x  y  x                               x                                x  ",
   "  x    o             o              x!!!!!xx                              x                      o         x  ",
   "  x                                hxxxxxxxxx                           x x         yyyyyy      xxx        x  ",
   "  x                           xxx xxx     xxxx    x    x    x    x     xxoxx    xxx        x               x  ",
   "!!xzzx!!xzzzzzzzzzzx!!xzzzzzzzx   xxx       xxx!!!x!!!!x!!!!x!!!!x!!!xxxyyyxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  ",
   "!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  m       o   xxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "xxx                           xxxxxx        xx                        x!!!!!x                                 ",
   "                                    xxx!!x!!xx                                                                "],
  ["                                                                                                              ",
   "                                                                                                    o         ",
   "                                                                                                   xxxx       ",
   "                                                                                                  x           ",
   "                                                                                          m       x xxx       ",
   "                          o                                                              xx       o o x    o  ",
   "                                          o                   xoooooox                            o o x       ",
   "   o           xxxxxxxxxx                                     !x    x!xx                              x       ",
   "               x oooooo x                            xxxx     !!xxxx!!!!x                   xxx!xxxxxxx       ",
   "xxxxxxxx       x oooooo x                                              !            x       !   x          o  ",
   "v      x       ! oooooo !              yyyyyyy                         !         o  x    o  !xx x xxxxx       ",
   "     o x   x   !!x    x!x                                        o     !            x       ! x x   o x       ",
   "       !               xx o       x                          xxxx xxxxx!      xxxxxxxx!xxxxxxxx xxxxxxxxxxxo  ",
   "    xx!!            x   x                 xxxxxx                xmx    !    x           !!  v       x    xxx  ",
   "    x                   xx|xx!x      o    x    x         xx            ! o              !!        xx    xx    ",
   "    x                        !x               ox                       !             o  !!      xx     xx     ",
   "   xx    o      z            x!                x                       xxxx             !!            xx      ",
   "    x       x                x!    x          xx      xx                             x  !!           xx   o   ",
   "    x               xxx      x!       b                                             xxx !!    x     x         ",
   "    x                        x!                               o                   xx o xxx      x    xx       ",
   "  o x                     o  xxxxxxxxxxxxxxxxxxxxxx                             x         x     xx    xx!x  x!",
   "  x xx                                         o  x       x|      x            xx   oooo  xx o    xx          ",
   "  x x       xxxx         xxx          o           x                      x   x xx         xx xx    x       x  ",
   "  xyx      xx              xx!!!!!!!    !!!xx  x  x           x                      o        x!!!!!xx        ",
   "  x x!!!o !!x                      x        x     x              |                   x        xxxxxxxxx   o   ",
   "  x xxxxxxxxx                               x     x              o                                            ",
   "  x             xxxxxxxxx            xxxxxxxx     x       o           x                          o    o   o   ",
   "                x       !            xo x         x                                 x                         ",
   "   @            x       !   o       xx xx         x                           x           x  xxxxxxxxxxxxxxxxx",
   " xxxxxxxx      x    o   x                     xxxxx       xx     xx      h                                    ",
   "        x=    x            m                 =x   x                     xxx                                   ",
   "!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxx                                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
  ["                                                                                                        x     ",
   "                                                                                                        x     ",
   "                                                                                                        x     ",
   "                                                                                                        x     ",
   "                                                                                                        x     ",
   "                                                                                                        x     ",
   "               w   w     www     w   w         w     w    w   ww    w   w                               x     ",
   "                w w     w   w    w   w         w     w        w w   w   w                               x     ",
   "                 w      w   w    w   w         w  w  w    w   w  w  w   w                               x     ",
   "                 w      w   w    w   w         w w w w    w   w   w w                                   x     ",
   "                 w       www      www          ww   ww    w   w    ww   w                               x     ",
   "                                                                                                       ox     ",
   "                                                                                                        x     ",
   "                                                                                                        x     ",
   "                                                                                                        x     ",
   " @zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxx     ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
 ];



if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
