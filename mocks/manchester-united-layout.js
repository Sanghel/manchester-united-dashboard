{
  "version": "2.9",
  "children": [
    {
      "type": "frame",
      "id": "bi8Au",
      "x": 0,
      "y": 0,
      "name": "Frame",
      "clip": true,
      "width": 1920,
      "height": 1080,
      "fill": "#FFFFFF",
      "layout": "vertical"
    },
    {
      "type": "frame",
      "id": "cICNL",
      "x": 0,
      "y": 0,
      "name": "Header",
      "width": 1920,
      "height": 70,
      "fill": "$mu-red-primary",
      "padding": [
        0,
        32
      ],
      "justifyContent": "space_between",
      "alignItems": "center",
      "children": [
        {
          "type": "frame",
          "id": "3g6Cy",
          "name": "headerLeft",
          "gap": 16,
          "alignItems": "center",
          "children": [
            {
              "type": "rectangle",
              "cornerRadius": 8,
              "id": "257NO",
              "name": "logoBox",
              "fill": "$mu-gold",
              "width": 40,
              "height": 40
            },
            {
              "type": "text",
              "id": "egE1l",
              "name": "headerTitle",
              "fill": "$text-primary",
              "content": "Manchester United Dashboard",
              "fontFamily": "Inter",
              "fontSize": 20,
              "fontWeight": "bold"
            }
          ]
        },
        {
          "type": "frame",
          "id": "vA3bb",
          "name": "headerCenter",
          "alignItems": "center",
          "children": [
            {
              "type": "frame",
              "id": "Z6jm4",
              "name": "seasonBadge",
              "fill": "$mu-red-secondary",
              "cornerRadius": 8,
              "padding": [
                8,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "text",
                  "id": "GbZEz",
                  "name": "seasonText",
                  "fill": "$text-primary",
                  "content": "2023/24 Season",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "bold"
                }
              ]
            }
          ]
        },
        {
          "type": "frame",
          "id": "g1Aa5",
          "name": "headerRight",
          "gap": 16,
          "alignItems": "center",
          "children": [
            {
              "type": "ellipse",
              "id": "bmjXS",
              "name": "notificationDot",
              "fill": "$mu-gold",
              "width": 8,
              "height": 8
            },
            {
              "type": "rectangle",
              "cornerRadius": 20,
              "id": "q4j2O",
              "name": "userBox",
              "fill": "$bg-card",
              "width": 40,
              "height": 40
            }
          ]
        }
      ]
    },
    {
      "type": "frame",
      "id": "k0UpJ",
      "x": 0,
      "y": 70,
      "name": "mainContainer",
      "width": 1920,
      "height": "fill_container(900)",
      "layout": "vertical",
      "gap": 24,
      "padding": 16,
      "children": [
        {
          "type": "frame",
          "id": "paejb",
          "name": "Sidebar",
          "width": 280,
          "height": "fill_container",
          "fill": "$bg-sidebar",
          "layout": "vertical",
          "gap": 8,
          "padding": [
            24,
            16
          ],
          "children": [
            {
              "type": "frame",
              "id": "WOfbB",
              "name": "navHome",
              "width": "fill_container",
              "fill": "$bg-card",
              "cornerRadius": 8,
              "gap": 12,
              "padding": [
                12,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "icon_font",
                  "id": "vuu5I",
                  "width": 20,
                  "height": 20,
                  "iconFontName": "house",
                  "iconFontFamily": "lucide",
                  "fill": "$mu-red-primary"
                },
                {
                  "type": "text",
                  "id": "F5z32",
                  "name": "navLabel1",
                  "fill": "$text-primary",
                  "content": "Home",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "bold"
                }
              ]
            },
            {
              "type": "frame",
              "id": "c376O",
              "name": "navScores",
              "width": "fill_container",
              "cornerRadius": 8,
              "gap": 12,
              "padding": [
                12,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "icon_font",
                  "id": "hzqf7",
                  "width": 20,
                  "height": 20,
                  "iconFontName": "activity",
                  "iconFontFamily": "lucide",
                  "fill": "$text-primary"
                },
                {
                  "type": "text",
                  "id": "u6cwe",
                  "name": "navLabel2",
                  "fill": "$text-primary",
                  "content": "Scores",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "normal"
                }
              ]
            },
            {
              "type": "frame",
              "id": "fIITM",
              "name": "navStandings",
              "width": "fill_container",
              "cornerRadius": 8,
              "gap": 12,
              "padding": [
                12,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "icon_font",
                  "id": "AHeIe",
                  "width": 20,
                  "height": 20,
                  "iconFontName": "trophy",
                  "iconFontFamily": "lucide",
                  "fill": "$text-primary"
                },
                {
                  "type": "text",
                  "id": "y9svB",
                  "name": "navLabel3",
                  "fill": "$text-primary",
                  "content": "Standings",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "normal"
                }
              ]
            },
            {
              "type": "frame",
              "id": "UVVu8",
              "name": "navPlayers",
              "width": "fill_container",
              "cornerRadius": 8,
              "gap": 12,
              "padding": [
                12,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "icon_font",
                  "id": "pMQis",
                  "width": 20,
                  "height": 20,
                  "iconFontName": "users",
                  "iconFontFamily": "lucide",
                  "fill": "$text-primary"
                },
                {
                  "type": "text",
                  "id": "ZDzW3",
                  "name": "navLabel4",
                  "fill": "$text-primary",
                  "content": "Players",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "normal"
                }
              ]
            },
            {
              "type": "frame",
              "id": "ua7hM",
              "name": "navStats",
              "width": "fill_container",
              "cornerRadius": 8,
              "gap": 12,
              "padding": [
                12,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "icon_font",
                  "id": "Qk9FD",
                  "width": 20,
                  "height": 20,
                  "iconFontName": "bar-chart-2",
                  "iconFontFamily": "lucide",
                  "fill": "$text-primary"
                },
                {
                  "type": "text",
                  "id": "qi46D",
                  "name": "navLabel5",
                  "fill": "$text-primary",
                  "content": "Statistics",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "normal"
                }
              ]
            },
            {
              "type": "rectangle",
              "id": "GcLIi",
              "name": "navDivider",
              "opacity": 0.2,
              "fill": "$text-secondary",
              "width": "fill_container",
              "height": 1
            },
            {
              "type": "frame",
              "id": "5oHP3",
              "name": "navSettings",
              "width": "fill_container",
              "cornerRadius": 8,
              "gap": 12,
              "padding": [
                12,
                16
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "icon_font",
                  "id": "DQ1Cu",
                  "width": 20,
                  "height": 20,
                  "iconFontName": "settings",
                  "iconFontFamily": "lucide",
                  "fill": "$text-primary"
                },
                {
                  "type": "text",
                  "id": "xl0D1",
                  "name": "navLabel6",
                  "fill": "$text-primary",
                  "content": "Settings",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "normal"
                }
              ]
            }
          ]
        },
        {
          "type": "frame",
          "id": "6zJfL",
          "name": "Content Area",
          "width": "fill_container",
          "height": "fill_container",
          "fill": "$bg-dark",
          "layout": "vertical",
          "gap": 32,
          "padding": 32,
          "children": [
            {
              "type": "frame",
              "id": "Ksn47",
              "name": "Stats Overview Cards",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 24,
              "children": [
                {
                  "type": "text",
                  "id": "tnS23",
                  "name": "statsTitle",
                  "fill": "$text-primary",
                  "content": "Performance Overview",
                  "fontFamily": "Inter",
                  "fontSize": 24,
                  "fontWeight": "bold"
                },
                {
                  "type": "frame",
                  "id": "IPvOq",
                  "name": "statsGrid",
                  "width": "fill_container",
                  "gap": 24,
                  "children": [
                    {
                      "type": "frame",
                      "id": "KONPk",
                      "name": "card1",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 24,
                      "children": [
                        {
                          "type": "icon_font",
                          "id": "NpRIv",
                          "width": 20,
                          "height": 20,
                          "iconFontName": "calendar",
                          "iconFontFamily": "lucide",
                          "fill": "$mu-gold"
                        },
                        {
                          "type": "text",
                          "id": "K9oQa",
                          "name": "card1Label",
                          "fill": "$text-secondary",
                          "content": "Total Matches",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "dWZk8",
                          "name": "card1Num",
                          "fill": "$mu-red-primary",
                          "content": "38",
                          "fontFamily": "Inter",
                          "fontSize": 48,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "frame",
                          "id": "ug9db",
                          "name": "card1Trend",
                          "gap": 8,
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "ellipse",
                              "id": "AYAif",
                              "name": "trendDot",
                              "fill": "$success-green",
                              "width": 6,
                              "height": 6
                            },
                            {
                              "type": "text",
                              "id": "1RDmt",
                              "name": "trendText",
                              "fill": "$success-green",
                              "content": "+5 vs last month",
                              "fontFamily": "Inter",
                              "fontSize": 12,
                              "fontWeight": "normal"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "6twbr",
                      "name": "card2",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 24,
                      "children": [
                        {
                          "type": "icon_font",
                          "id": "GEqoN",
                          "width": 20,
                          "height": 20,
                          "iconFontName": "target",
                          "iconFontFamily": "lucide",
                          "fill": "$mu-gold"
                        },
                        {
                          "type": "text",
                          "id": "Of4fz",
                          "name": "card2Label",
                          "fill": "$text-secondary",
                          "content": "Goals This Season",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "6aLMW",
                          "name": "card2Num",
                          "fill": "$mu-gold",
                          "content": "87",
                          "fontFamily": "Inter",
                          "fontSize": 48,
                          "fontWeight": "bold"
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "4F2LL",
                      "name": "card3",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 24,
                      "children": [
                        {
                          "type": "icon_font",
                          "id": "tRfFl",
                          "width": 20,
                          "height": 20,
                          "iconFontName": "trophy",
                          "iconFontFamily": "lucide",
                          "fill": "$mu-gold"
                        },
                        {
                          "type": "text",
                          "id": "bMSEO",
                          "name": "card3Label",
                          "fill": "$text-secondary",
                          "content": "Win Percentage",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "Ttq8l",
                          "name": "card3Num",
                          "fill": "$success-green",
                          "content": "68%",
                          "fontFamily": "Inter",
                          "fontSize": 48,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "rectangle",
                          "cornerRadius": 4,
                          "id": "rUgqL",
                          "name": "card3Progress",
                          "fill": "$bg-dark",
                          "width": "fill_container",
                          "height": 8
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "fCuG1",
                      "name": "card4",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 24,
                      "children": [
                        {
                          "type": "icon_font",
                          "id": "kGgPy",
                          "width": 20,
                          "height": 20,
                          "iconFontName": "award",
                          "iconFontFamily": "lucide",
                          "fill": "$mu-gold"
                        },
                        {
                          "type": "text",
                          "id": "Zy9Jm",
                          "name": "card4Label",
                          "fill": "$text-secondary",
                          "content": "League Position",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "AxFSK",
                          "name": "card4Num",
                          "fill": "$mu-red-primary",
                          "content": "3rd",
                          "fontFamily": "Inter",
                          "fontSize": 48,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "frame",
                          "id": "lvWEr",
                          "name": "card4Badge",
                          "fill": "$mu-gold",
                          "cornerRadius": 6,
                          "padding": [
                            4,
                            12
                          ],
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "Wzn8I",
                              "name": "card4BadgeText",
                              "fill": "$bg-dark",
                              "content": "Top 4",
                              "fontFamily": "Inter",
                              "fontSize": 12,
                              "fontWeight": "bold"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "5Q9YP",
              "name": "Latest Scores Section",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 24,
              "children": [
                {
                  "type": "frame",
                  "id": "QU3VV",
                  "name": "title",
                  "width": "fill_container",
                  "gap": 12,
                  "alignItems": "center",
                  "children": [
                    {
                      "type": "icon_font",
                      "id": "fxtfR",
                      "width": 24,
                      "height": 24,
                      "iconFontName": "activity",
                      "iconFontFamily": "lucide",
                      "fill": "$mu-red-primary"
                    },
                    {
                      "type": "text",
                      "id": "En4ke",
                      "fill": "$text-primary",
                      "content": "Latest Scores",
                      "fontFamily": "Inter",
                      "fontSize": 20,
                      "fontWeight": "600"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "0trCI",
                  "name": "scoresGrid",
                  "width": "fill_container",
                  "gap": 20,
                  "children": [
                    {
                      "type": "frame",
                      "id": "DSEYw",
                      "name": "match1",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "children": [
                        {
                          "type": "frame",
                          "id": "bo2Wt",
                          "name": "match1Header",
                          "width": "fill_container",
                          "gap": 8,
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "M3TVh",
                              "fill": "$text-secondary",
                              "content": "Mar 22 · Premier League",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "RkFLO",
                              "name": "badgeWin",
                              "fill": "$success-green",
                              "cornerRadius": 4,
                              "padding": [
                                4,
                                8
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "id": "3I5Vg",
                                  "fill": "$text-primary",
                                  "content": "WIN",
                                  "fontFamily": "Inter",
                                  "fontSize": 10,
                                  "fontWeight": "600"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "lgwBo",
                          "name": "teamsScore",
                          "width": "fill_container",
                          "gap": 16,
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "frame",
                              "id": "5cObP",
                              "name": "team1",
                              "layout": "vertical",
                              "gap": 4,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "bzqVD",
                                  "fill": "$text-secondary",
                                  "content": "MAN UTD",
                                  "fontFamily": "Inter",
                                  "fontSize": 11,
                                  "fontWeight": "normal"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "JGRjS",
                              "name": "team2",
                              "layout": "vertical",
                              "gap": 4,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "6d920",
                                  "fill": "$text-secondary",
                                  "content": "NEWCASTLE",
                                  "fontFamily": "Inter",
                                  "fontSize": 11,
                                  "fontWeight": "normal"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "id": "5ufl9",
                          "fill": "$text-primary",
                          "content": "2 - 1",
                          "textAlign": "center",
                          "fontFamily": "Inter",
                          "fontSize": 32,
                          "fontWeight": "700"
                        },
                        {
                          "type": "frame",
                          "id": "maM4P",
                          "name": "match1Stats",
                          "width": "fill_container",
                          "gap": 20,
                          "padding": [
                            8,
                            0
                          ],
                          "justifyContent": "space_around",
                          "children": [
                            {
                              "type": "text",
                              "id": "qIUpB",
                              "fill": "$text-secondary",
                              "content": "Possession 58%",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "text",
                              "id": "bKVu4",
                              "fill": "$text-secondary",
                              "content": "Shots 14",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "normal"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "9lg8Z",
                      "name": "match2",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "children": [
                        {
                          "type": "frame",
                          "id": "A2hjl",
                          "name": "match2Header",
                          "width": "fill_container",
                          "gap": 8,
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "73kM0",
                              "fill": "$text-secondary",
                              "content": "Mar 20 · FA Cup",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "eDR0s",
                              "name": "badgeDraw",
                              "fill": "$warning-orange",
                              "cornerRadius": 4,
                              "padding": [
                                4,
                                8
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "id": "YFP6m",
                                  "fill": "$text-primary",
                                  "content": "DRAW",
                                  "fontFamily": "Inter",
                                  "fontSize": 10,
                                  "fontWeight": "600"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "6QXyI",
                          "name": "teamsScore2",
                          "width": "fill_container",
                          "gap": 16,
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "ll8Ks",
                              "fill": "$text-secondary",
                              "content": "BRIGHTON",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "text",
                              "id": "h2fu5",
                              "fill": "$text-secondary",
                              "content": "MAN UTD",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "id": "pQ3cX",
                          "fill": "$text-primary",
                          "content": "1 - 1",
                          "textAlign": "center",
                          "fontFamily": "Inter",
                          "fontSize": 32,
                          "fontWeight": "700"
                        },
                        {
                          "type": "frame",
                          "id": "atOZS",
                          "name": "match2Stats",
                          "width": "fill_container",
                          "gap": 20,
                          "padding": [
                            8,
                            0
                          ],
                          "justifyContent": "space_around",
                          "children": [
                            {
                              "type": "text",
                              "id": "8PASX",
                              "fill": "$text-secondary",
                              "content": "Possession 52%",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "text",
                              "id": "Mf1si",
                              "fill": "$text-secondary",
                              "content": "Shots 10",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "normal"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "1GGbM",
                      "name": "match3",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "children": [
                        {
                          "type": "frame",
                          "id": "HuP9K",
                          "name": "match3Header",
                          "width": "fill_container",
                          "gap": 8,
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "oCbaO",
                              "fill": "$text-secondary",
                              "content": "Mar 15 · Champions League",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "L3eqi",
                              "name": "badgeLoss",
                              "fill": "$error-red",
                              "cornerRadius": 4,
                              "padding": [
                                4,
                                8
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "id": "CGGR1",
                                  "fill": "$text-primary",
                                  "content": "LOSS",
                                  "fontFamily": "Inter",
                                  "fontSize": 10,
                                  "fontWeight": "600"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "6GzYe",
                          "name": "teamsScore3",
                          "width": "fill_container",
                          "gap": 16,
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "xMhbh",
                              "fill": "$text-secondary",
                              "content": "BARCELONA",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "text",
                              "id": "KxLon",
                              "fill": "$text-secondary",
                              "content": "MAN UTD",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "id": "yWRiA",
                          "fill": "$text-primary",
                          "content": "3 - 2",
                          "textAlign": "center",
                          "fontFamily": "Inter",
                          "fontSize": 32,
                          "fontWeight": "700"
                        },
                        {
                          "type": "frame",
                          "id": "WXTJG",
                          "name": "match3Stats",
                          "width": "fill_container",
                          "gap": 20,
                          "padding": [
                            8,
                            0
                          ],
                          "justifyContent": "space_around",
                          "children": [
                            {
                              "type": "text",
                              "id": "CAIs3",
                              "fill": "$text-secondary",
                              "content": "Possession 44%",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "text",
                              "id": "QVLCC",
                              "fill": "$text-secondary",
                              "content": "Shots 9",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "normal"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "Cvn6Z",
              "name": "League Table Section",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 24,
              "children": [
                {
                  "type": "frame",
                  "id": "qbXpV",
                  "name": "tableContainer",
                  "width": "fill_container",
                  "fill": "$bg-card",
                  "cornerRadius": 12,
                  "layout": "vertical",
                  "padding": 16,
                  "children": [
                    {
                      "type": "frame",
                      "id": "hJiIQ",
                      "name": "tableHeader",
                      "width": "fill_container",
                      "padding": [
                        0,
                        0,
                        12,
                        0
                      ],
                      "children": [
                        {
                          "type": "frame",
                          "id": "Csrwx",
                          "name": "headerPos",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "iGGY5",
                              "fill": "$text-secondary",
                              "content": "Pos",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "eP8Jg",
                          "name": "headerTeam",
                          "width": "fill_container",
                          "children": [
                            {
                              "type": "text",
                              "id": "LsHp8",
                              "fill": "$text-secondary",
                              "content": "Team",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "rAsOC",
                          "name": "headerP",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "tfslT",
                              "fill": "$text-secondary",
                              "content": "P",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "3SdO6",
                          "name": "headerW",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "3x3ft",
                              "fill": "$text-secondary",
                              "content": "W",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "y1R6T",
                          "name": "headerD",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "k1ALe",
                              "fill": "$text-secondary",
                              "content": "D",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "THhKq",
                          "name": "headerL",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "Brh59",
                              "fill": "$text-secondary",
                              "content": "L",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "ZonlE",
                          "name": "headerGD",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "JoU2A",
                              "fill": "$text-secondary",
                              "content": "GD",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "fCd0E",
                          "name": "headerPts",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "8R6zg",
                              "fill": "$text-secondary",
                              "content": "Pts",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "wHOZ9",
                      "name": "row1",
                      "width": "fill_container",
                      "padding": [
                        12,
                        0
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "frame",
                          "id": "v5Ywe",
                          "name": "r1Pos",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "rRowW",
                              "fill": "$text-secondary",
                              "content": "1",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "alZqp",
                          "name": "r1Team",
                          "width": "fill_container",
                          "children": [
                            {
                              "type": "text",
                              "id": "wA6H3",
                              "fill": "$text-primary",
                              "content": "Arsenal",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "lNA8c",
                              "name": "logoFrame1",
                              "width": "fill_container",
                              "gap": 8,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "cornerRadius": 4,
                                  "id": "2gDzv",
                                  "name": "teamLogo1",
                                  "opacity": 0.9,
                                  "fill": {
                                    "type": "image",
                                    "enabled": true,
                                    "url": "./images/generated-1774497888319.png",
                                    "mode": "fill"
                                  },
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "type": "text",
                                  "id": "6DQD4",
                                  "name": "teamName1",
                                  "fill": "$text-primary",
                                  "content": "Liverpool",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "5X8wr",
                          "name": "r1P",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "on2Dt",
                              "fill": "$text-secondary",
                              "content": "28",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "fcZAv",
                          "name": "r1W",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "LFWvf",
                              "fill": "$text-secondary",
                              "content": "21",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "HtyOw",
                          "name": "r1D",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "XFoyD",
                              "fill": "$text-secondary",
                              "content": "4",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "99tti",
                          "name": "r1L",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "I4I8J",
                              "fill": "$text-secondary",
                              "content": "3",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "L7JRn",
                          "name": "r1GD",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "wLwki",
                              "fill": "$text-secondary",
                              "content": "+38",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "jqX9Y",
                          "name": "r1Pts",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "jF1e6",
                              "fill": "$text-primary",
                              "content": "67",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "eTi8z",
                      "name": "row2",
                      "width": "fill_container",
                      "padding": [
                        12,
                        0
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "frame",
                          "id": "vI4RQ",
                          "name": "r2Pos",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "bOUfI",
                              "fill": "$text-secondary",
                              "content": "2",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "Thutd",
                          "name": "r2Team",
                          "width": "fill_container",
                          "children": [
                            {
                              "type": "text",
                              "id": "1kY69",
                              "fill": "$text-primary",
                              "content": "Liverpool",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "H4JfK",
                              "name": "logoFrame2",
                              "width": "fill_container",
                              "gap": 8,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "cornerRadius": 4,
                                  "id": "kbc3B",
                                  "name": "teamLogo2",
                                  "fill": {
                                    "type": "image",
                                    "enabled": true,
                                    "url": "./images/generated-1774497939090.png",
                                    "mode": "fill"
                                  },
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "type": "text",
                                  "id": "J4LFC",
                                  "name": "teamName2",
                                  "fill": "$text-primary",
                                  "content": "Manchester City",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "C0zls",
                          "name": "r2P",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "Yvqj0",
                              "fill": "$text-secondary",
                              "content": "28",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "DvW53",
                          "name": "r2W",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "jOGc2",
                              "fill": "$text-secondary",
                              "content": "20",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "PgdWL",
                          "name": "r2D",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "rj0r4",
                              "fill": "$text-secondary",
                              "content": "3",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "96zJL",
                          "name": "r2L",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "2bVCO",
                              "fill": "$text-secondary",
                              "content": "5",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "mqUXH",
                          "name": "r2GD",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "zfNMA",
                              "fill": "$text-secondary",
                              "content": "+25",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "vk5gK",
                          "name": "r2Pts",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "q84Xm",
                              "fill": "$text-primary",
                              "content": "63",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "1s1nC",
                      "name": "row3",
                      "opacity": 0.08,
                      "width": "fill_container",
                      "fill": "$mu-red-primary",
                      "padding": [
                        12,
                        0
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "frame",
                          "id": "qLNf5",
                          "name": "r3Pos",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "lzM7c",
                              "fill": "$mu-red-primary",
                              "content": "3",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "WWBQo",
                          "name": "r3Team",
                          "width": "fill_container",
                          "children": [
                            {
                              "type": "text",
                              "id": "WdHg0",
                              "fill": "$text-primary",
                              "content": "Man United",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            },
                            {
                              "type": "frame",
                              "id": "YqXrS",
                              "name": "logoFrame3",
                              "width": "fill_container",
                              "gap": 8,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "cornerRadius": 4,
                                  "id": "JQVwn",
                                  "name": "teamLogo3",
                                  "fill": {
                                    "type": "image",
                                    "enabled": true,
                                    "url": "./images/generated-1774497955320.png",
                                    "mode": "fill"
                                  },
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "type": "text",
                                  "id": "6oqO8",
                                  "name": "teamName3",
                                  "fill": "$text-primary",
                                  "content": "Man United",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "sMhPi",
                          "name": "r3P",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "dlFrs",
                              "fill": "$text-secondary",
                              "content": "27",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "6yP12",
                          "name": "r3W",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "OcH33",
                              "fill": "$text-secondary",
                              "content": "19",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "56atd",
                          "name": "r3D",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "yBV4f",
                              "fill": "$text-secondary",
                              "content": "5",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "eVn16",
                          "name": "r3L",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "hPaWR",
                              "fill": "$text-secondary",
                              "content": "3",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "kzxtB",
                          "name": "r3GD",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "Pi3Tz",
                              "fill": "$text-secondary",
                              "content": "+28",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "ryjwy",
                          "name": "r3Pts",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "WUTOg",
                              "fill": "$text-primary",
                              "content": "62",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "b5sP4",
                      "name": "row4",
                      "width": "fill_container",
                      "padding": [
                        12,
                        0
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "frame",
                          "id": "WT0Vn",
                          "name": "r4Pos",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "6WPZg",
                              "fill": "$text-secondary",
                              "content": "4",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "FjExg",
                          "name": "r4Team",
                          "width": "fill_container",
                          "children": [
                            {
                              "type": "text",
                              "id": "bFIYq",
                              "fill": "$text-primary",
                              "content": "Chelsea",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "McwLO",
                              "name": "logoFrame4",
                              "width": "fill_container",
                              "gap": 8,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "cornerRadius": 4,
                                  "id": "IISei",
                                  "name": "teamLogo4",
                                  "fill": {
                                    "type": "image",
                                    "enabled": true,
                                    "url": "./images/generated-1774497970030.png",
                                    "mode": "fill"
                                  },
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "type": "text",
                                  "id": "GbiZk",
                                  "name": "teamName4",
                                  "fill": "$text-primary",
                                  "content": "Arsenal",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "UNaVR",
                          "name": "r4P",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "saBLj",
                              "fill": "$text-secondary",
                              "content": "27",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "902Uk",
                          "name": "r4W",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "bewPZ",
                              "fill": "$text-secondary",
                              "content": "17",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "vqxSh",
                          "name": "r4D",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "4sl1p",
                              "fill": "$text-secondary",
                              "content": "4",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "3Lffd",
                          "name": "r4L",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "k7tlK",
                              "fill": "$text-secondary",
                              "content": "6",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "AXk05",
                          "name": "r4GD",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "4eTG4",
                              "fill": "$text-secondary",
                              "content": "+20",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "MTXHH",
                          "name": "r4Pts",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "uoiqx",
                              "fill": "$text-primary",
                              "content": "55",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "vWyZd",
                      "name": "row5",
                      "width": "fill_container",
                      "padding": [
                        12,
                        0
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "frame",
                          "id": "JLG32",
                          "name": "r5Pos",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "zWTVm",
                              "fill": "$text-secondary",
                              "content": "5",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "Dk7Ud",
                          "name": "r5Team",
                          "width": "fill_container",
                          "children": [
                            {
                              "type": "text",
                              "id": "9G9ua",
                              "fill": "$text-primary",
                              "content": "Aston Villa",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "VK7yY",
                              "name": "logoFrame5",
                              "width": "fill_container",
                              "gap": 8,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "cornerRadius": 4,
                                  "id": "Jm5Ph",
                                  "name": "teamLogo5",
                                  "fill": {
                                    "type": "image",
                                    "enabled": true,
                                    "url": "./images/generated-1774497992173.png",
                                    "mode": "fill"
                                  },
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "type": "text",
                                  "id": "yTfN9",
                                  "name": "teamName5",
                                  "fill": "$text-primary",
                                  "content": "Tottenham",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "GsxYQ",
                          "name": "r5P",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "yDLdW",
                              "fill": "$text-secondary",
                              "content": "27",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "DVQAS",
                          "name": "r5W",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "xF4yI",
                              "fill": "$text-secondary",
                              "content": "16",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "XGqrw",
                          "name": "r5D",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "Atdw5",
                              "fill": "$text-secondary",
                              "content": "5",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "jNlpy",
                          "name": "r5L",
                          "width": 35,
                          "children": [
                            {
                              "type": "text",
                              "id": "WiEDR",
                              "fill": "$text-secondary",
                              "content": "6",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "b2ffN",
                          "name": "r5GD",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "QiwJc",
                              "fill": "$text-secondary",
                              "content": "+18",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "normal"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "Tjl5k",
                          "name": "r5Pts",
                          "width": 40,
                          "children": [
                            {
                              "type": "text",
                              "id": "yqqNJ",
                              "fill": "$text-primary",
                              "content": "53",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "VlhdB",
              "name": "Performance Charts",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 24,
              "children": [
                {
                  "type": "text",
                  "id": "cXSKQ",
                  "name": "chartsTitle",
                  "fill": "$text-primary",
                  "content": "Performance Analytics",
                  "fontFamily": "Inter",
                  "fontSize": 24,
                  "fontWeight": "bold"
                },
                {
                  "type": "frame",
                  "id": "YQE20",
                  "name": "chartsContainer",
                  "width": "fill_container",
                  "gap": 24,
                  "children": [
                    {
                      "type": "frame",
                      "id": "LsGk0",
                      "name": "lineChartCard",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 24,
                      "children": [
                        {
                          "type": "text",
                          "id": "Yh7L9",
                          "name": "chartTitle1",
                          "fill": "$text-primary",
                          "content": "Goals Over Time",
                          "fontFamily": "Inter",
                          "fontSize": 16,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "rectangle",
                          "cornerRadius": 8,
                          "id": "GkItS",
                          "name": "chartArea1",
                          "fill": "$bg-dark",
                          "width": "fill_container",
                          "height": 250
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "9M0AA",
                      "name": "donutChartCard",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 24,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "ZAePD",
                          "name": "chartTitle2",
                          "fill": "$text-primary",
                          "content": "Results Distribution",
                          "fontFamily": "Inter",
                          "fontSize": 16,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "frame",
                          "id": "YF4Q3",
                          "name": "donutContainer",
                          "gap": 40,
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "ellipse",
                              "id": "euNJl",
                              "name": "donutVisual",
                              "innerRadius": 0.65,
                              "fill": "$bg-dark",
                              "width": 180,
                              "height": 180,
                              "stroke": {
                                "thickness": 20,
                                "fill": "$success-green"
                              }
                            },
                            {
                              "type": "frame",
                              "id": "ZYhKW",
                              "name": "donutLegend",
                              "layout": "vertical",
                              "gap": 12,
                              "children": [
                                {
                                  "type": "frame",
                                  "id": "kOJx4",
                                  "name": "legendWins",
                                  "gap": 8,
                                  "alignItems": "center",
                                  "children": [
                                    {
                                      "type": "rectangle",
                                      "cornerRadius": 2,
                                      "id": "2BQIC",
                                      "name": "legendDot1",
                                      "fill": "$success-green",
                                      "width": 12,
                                      "height": 12
                                    },
                                    {
                                      "type": "text",
                                      "id": "gVS8A",
                                      "name": "legendLabel1",
                                      "fill": "$text-primary",
                                      "content": "Wins (26)",
                                      "fontFamily": "Inter",
                                      "fontSize": 12,
                                      "fontWeight": "normal"
                                    }
                                  ]
                                },
                                {
                                  "type": "frame",
                                  "id": "Gf4bj",
                                  "name": "legendDraws",
                                  "gap": 8,
                                  "alignItems": "center",
                                  "children": [
                                    {
                                      "type": "rectangle",
                                      "cornerRadius": 2,
                                      "id": "uYVxl",
                                      "name": "legendDot2",
                                      "fill": "$warning-orange",
                                      "width": 12,
                                      "height": 12
                                    },
                                    {
                                      "type": "text",
                                      "id": "NYdHn",
                                      "name": "legendLabel2",
                                      "fill": "$text-primary",
                                      "content": "Draws (8)",
                                      "fontFamily": "Inter",
                                      "fontSize": 12,
                                      "fontWeight": "normal"
                                    }
                                  ]
                                },
                                {
                                  "type": "frame",
                                  "id": "jmc3Z",
                                  "name": "legendLoss",
                                  "gap": 8,
                                  "alignItems": "center",
                                  "children": [
                                    {
                                      "type": "rectangle",
                                      "cornerRadius": 2,
                                      "id": "04iXp",
                                      "name": "legendDot3",
                                      "fill": "$error-red",
                                      "width": 12,
                                      "height": 12
                                    },
                                    {
                                      "type": "text",
                                      "id": "BQ4b1",
                                      "name": "legendLabel3",
                                      "fill": "$text-primary",
                                      "content": "Losses (4)",
                                      "fontFamily": "Inter",
                                      "fontSize": 12,
                                      "fontWeight": "normal"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "L9VhN",
              "name": "Top Players Section",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 24,
              "children": [
                {
                  "type": "text",
                  "id": "yNnT3",
                  "name": "playersTitle",
                  "fill": "$text-primary",
                  "content": "Top Performers",
                  "fontFamily": "Inter",
                  "fontSize": 24,
                  "fontWeight": "bold"
                },
                {
                  "type": "frame",
                  "id": "cVqLz",
                  "name": "playersGrid",
                  "width": "fill_container",
                  "gap": 24,
                  "children": [
                    {
                      "type": "frame",
                      "id": "KNaH2",
                      "name": "player1Card",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "ellipse",
                          "id": "CFOUH",
                          "name": "player1Avatar",
                          "fill": {
                            "type": "image",
                            "enabled": true,
                            "url": "./images/generated-1774498024545.png",
                            "mode": "fill"
                          },
                          "width": 80,
                          "height": 80
                        },
                        {
                          "type": "text",
                          "id": "cBNaW",
                          "name": "player1Name",
                          "fill": "$text-primary",
                          "content": "Bruno Fernandes",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "hvNpq",
                          "name": "player1Number",
                          "fill": "$text-secondary",
                          "content": "#8",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "normal"
                        },
                        {
                          "type": "frame",
                          "id": "iUOp9",
                          "name": "player1Position",
                          "fill": "$mu-gold",
                          "cornerRadius": 6,
                          "padding": [
                            4,
                            12
                          ],
                          "children": [
                            {
                              "type": "text",
                              "id": "if4Hk",
                              "name": "player1PosText",
                              "fill": "$bg-dark",
                              "content": "Midfielder",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "bold"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "Knlmq",
                          "name": "player1Stats",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "frame",
                              "id": "wXaXT",
                              "name": "player1Stat1",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "Uw06m",
                                  "name": "statLabel1",
                                  "fill": "$text-secondary",
                                  "content": "Goals",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "2fCuG",
                                  "name": "statVal1",
                                  "fill": "$text-primary",
                                  "content": "12",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "49GxE",
                              "name": "player1Stat2",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "gPFcX",
                                  "name": "statLabel2",
                                  "fill": "$text-secondary",
                                  "content": "Assists",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "KaKt3",
                                  "name": "statVal2",
                                  "fill": "$text-primary",
                                  "content": "8",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "bE13k",
                              "name": "player1Stat3",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "6Lbgh",
                                  "name": "statLabel3",
                                  "fill": "$text-secondary",
                                  "content": "Rating",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "Ku3IQ",
                                  "name": "statVal3",
                                  "fill": "$text-primary",
                                  "content": "7.8/10",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "9b4dX",
                      "name": "player2Card",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "ellipse",
                          "id": "lCldN",
                          "name": "player2Avatar",
                          "fill": {
                            "type": "image",
                            "enabled": true,
                            "url": "./images/generated-1774498047470.png",
                            "mode": "fill"
                          },
                          "width": 80,
                          "height": 80
                        },
                        {
                          "type": "text",
                          "id": "uDvD2",
                          "name": "player2Name",
                          "fill": "$text-primary",
                          "content": "Harry Maguire",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "Dc35m",
                          "name": "player2Number",
                          "fill": "$text-secondary",
                          "content": "#6",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "normal"
                        },
                        {
                          "type": "frame",
                          "id": "m2pCI",
                          "name": "player2Position",
                          "fill": "$mu-gold",
                          "cornerRadius": 6,
                          "padding": [
                            4,
                            12
                          ],
                          "children": [
                            {
                              "type": "text",
                              "id": "h5Ust",
                              "name": "player2PosText",
                              "fill": "$bg-dark",
                              "content": "Defender",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "bold"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "JTssx",
                          "name": "player2Stats",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "frame",
                              "id": "uZSNw",
                              "name": "player2Stat1",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "ZA01Y",
                                  "name": "statLabel4",
                                  "fill": "$text-secondary",
                                  "content": "Goals",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "8f3Rj",
                                  "name": "statVal4",
                                  "fill": "$text-primary",
                                  "content": "2",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "J1WEj",
                              "name": "player2Stat2",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "8ljSt",
                                  "name": "statLabel5",
                                  "fill": "$text-secondary",
                                  "content": "Tackles",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "VklBw",
                                  "name": "statVal5",
                                  "fill": "$text-primary",
                                  "content": "45",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "Pu7kS",
                              "name": "player2Stat3",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "BtfxS",
                                  "name": "statLabel6",
                                  "fill": "$text-secondary",
                                  "content": "Rating",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "lQa3t",
                                  "name": "statVal6",
                                  "fill": "$text-primary",
                                  "content": "7.5/10",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "sgTWQ",
                      "name": "player3Card",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "ellipse",
                          "id": "fIXJs",
                          "name": "player3Avatar",
                          "fill": {
                            "type": "image",
                            "enabled": true,
                            "url": "./images/generated-1774498062545.png",
                            "mode": "fill"
                          },
                          "width": 80,
                          "height": 80
                        },
                        {
                          "type": "text",
                          "id": "mwvN4",
                          "name": "player3Name",
                          "fill": "$text-primary",
                          "content": "Jadon Sancho",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "ki5qE",
                          "name": "player3Number",
                          "fill": "$text-secondary",
                          "content": "#25",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "normal"
                        },
                        {
                          "type": "frame",
                          "id": "SR99E",
                          "name": "player3Position",
                          "fill": "$mu-gold",
                          "cornerRadius": 6,
                          "padding": [
                            4,
                            12
                          ],
                          "children": [
                            {
                              "type": "text",
                              "id": "vPZzI",
                              "name": "player3PosText",
                              "fill": "$bg-dark",
                              "content": "Winger",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "bold"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "EH8Pe",
                          "name": "player3Stats",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "frame",
                              "id": "pxr7X",
                              "name": "player3Stat1",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "LJCKb",
                                  "name": "statLabel7",
                                  "fill": "$text-secondary",
                                  "content": "Goals",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "O5SUM",
                                  "name": "statVal7",
                                  "fill": "$text-primary",
                                  "content": "8",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "ECnHy",
                              "name": "player3Stat2",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "EswId",
                                  "name": "statLabel8",
                                  "fill": "$text-secondary",
                                  "content": "Assists",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "pW6Uw",
                                  "name": "statVal8",
                                  "fill": "$text-primary",
                                  "content": "5",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "YEkhm",
                              "name": "player3Stat3",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "uTGzX",
                                  "name": "statLabel9",
                                  "fill": "$text-secondary",
                                  "content": "Rating",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "RjxOv",
                                  "name": "statVal9",
                                  "fill": "$text-primary",
                                  "content": "7.6/10",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "SqQRL",
                      "name": "player4Card",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "layout": "vertical",
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "ellipse",
                          "id": "tQenF",
                          "name": "player4Avatar",
                          "fill": {
                            "type": "image",
                            "enabled": true,
                            "url": "./images/generated-1774498091304.png",
                            "mode": "fill"
                          },
                          "width": 80,
                          "height": 80
                        },
                        {
                          "type": "text",
                          "id": "0wETF",
                          "name": "player4Name",
                          "fill": "$text-primary",
                          "content": "Antony",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "bold"
                        },
                        {
                          "type": "text",
                          "id": "49eY6",
                          "name": "player4Number",
                          "fill": "$text-secondary",
                          "content": "#21",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "normal"
                        },
                        {
                          "type": "frame",
                          "id": "AEUUc",
                          "name": "player4Position",
                          "fill": "$mu-gold",
                          "cornerRadius": 6,
                          "padding": [
                            4,
                            12
                          ],
                          "children": [
                            {
                              "type": "text",
                              "id": "wb8Vt",
                              "name": "player4PosText",
                              "fill": "$bg-dark",
                              "content": "Winger",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "bold"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "MDNCw",
                          "name": "player4Stats",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "frame",
                              "id": "MwYcq",
                              "name": "player4Stat1",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "YUQa5",
                                  "name": "statLabel10",
                                  "fill": "$text-secondary",
                                  "content": "Goals",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "iWSzT",
                                  "name": "statVal10",
                                  "fill": "$text-primary",
                                  "content": "10",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "KHfeF",
                              "name": "player4Stat2",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "LlN2N",
                                  "name": "statLabel11",
                                  "fill": "$text-secondary",
                                  "content": "Assists",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "CrIyZ",
                                  "name": "statVal11",
                                  "fill": "$text-primary",
                                  "content": "6",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "m5ooY",
                              "name": "player4Stat3",
                              "width": "fill_container",
                              "justifyContent": "space_between",
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "text",
                                  "id": "sKpCA",
                                  "name": "statLabel12",
                                  "fill": "$text-secondary",
                                  "content": "Rating",
                                  "fontFamily": "Inter",
                                  "fontSize": 12,
                                  "fontWeight": "normal"
                                },
                                {
                                  "type": "text",
                                  "id": "LHYtP",
                                  "name": "statVal12",
                                  "fill": "$text-primary",
                                  "content": "7.9/10",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "MZkMU",
              "name": "Upcoming Fixtures",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 24,
              "children": [
                {
                  "type": "text",
                  "id": "alT7U",
                  "name": "fixturesTitle",
                  "fill": "$text-primary",
                  "content": "Upcoming Fixtures",
                  "fontFamily": "Inter",
                  "fontSize": 24,
                  "fontWeight": "bold"
                },
                {
                  "type": "frame",
                  "id": "jw9bH",
                  "name": "fixturesContainer",
                  "width": "fill_container",
                  "layout": "vertical",
                  "gap": 16,
                  "children": [
                    {
                      "type": "frame",
                      "id": "pdBN9",
                      "name": "fixture1",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "rectangle",
                          "cornerRadius": 8,
                          "id": "zg6Rv",
                          "name": "fixture1Dot",
                          "fill": "$mu-gold",
                          "width": 16,
                          "height": 16
                        },
                        {
                          "type": "frame",
                          "id": "NRs7w",
                          "name": "fixture1Content",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "children": [
                            {
                              "type": "text",
                              "id": "17RBw",
                              "name": "fixture1Date",
                              "fill": "$text-secondary",
                              "content": "28 Mar 2024 • 3:00 PM",
                              "fontFamily": "Inter",
                              "fontSize": 12,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "YoCje",
                              "name": "fixture1Teams",
                              "width": "fill_container",
                              "gap": 12,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "frame",
                                  "id": "E0ox0",
                                  "name": "fixture1Badge1",
                                  "fill": "$mu-gold",
                                  "cornerRadius": 4,
                                  "padding": [
                                    4,
                                    8
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "id": "f0J3y",
                                      "name": "fixture1BadgeText1",
                                      "fill": "$bg-dark",
                                      "content": "PL",
                                      "fontFamily": "Inter",
                                      "fontSize": 10,
                                      "fontWeight": "bold"
                                    }
                                  ]
                                },
                                {
                                  "type": "text",
                                  "id": "iyaic",
                                  "name": "fixture1Opponent",
                                  "fill": "$text-primary",
                                  "content": "Manchester United vs Liverpool",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "9ls5K",
                              "name": "fixture1Venue",
                              "gap": 6,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "id": "8KIJL",
                                  "name": "venueIcon1",
                                  "fill": "$text-secondary",
                                  "width": 12,
                                  "height": 12
                                },
                                {
                                  "type": "text",
                                  "id": "c81fJ",
                                  "name": "venueText1",
                                  "fill": "$text-secondary",
                                  "content": "Old Trafford • Home",
                                  "fontFamily": "Inter",
                                  "fontSize": 11,
                                  "fontWeight": "normal"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "JOVZb",
                      "name": "fixture2",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "rectangle",
                          "cornerRadius": 8,
                          "id": "ISKyl",
                          "name": "fixture2Dot",
                          "fill": "$mu-gold",
                          "width": 16,
                          "height": 16
                        },
                        {
                          "type": "frame",
                          "id": "HqWAE",
                          "name": "fixture2Content",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "children": [
                            {
                              "type": "text",
                              "id": "QUu07",
                              "name": "fixture2Date",
                              "fill": "$text-secondary",
                              "content": "31 Mar 2024 • 2:00 PM",
                              "fontFamily": "Inter",
                              "fontSize": 12,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "n7GKx",
                              "name": "fixture2Teams",
                              "width": "fill_container",
                              "gap": 12,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "frame",
                                  "id": "hRmiC",
                                  "name": "fixture2Badge1",
                                  "fill": "$warning-orange",
                                  "cornerRadius": 4,
                                  "padding": [
                                    4,
                                    8
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "id": "MZ7Gc",
                                      "name": "fixture2BadgeText1",
                                      "fill": "$bg-dark",
                                      "content": "FA",
                                      "fontFamily": "Inter",
                                      "fontSize": 10,
                                      "fontWeight": "bold"
                                    }
                                  ]
                                },
                                {
                                  "type": "text",
                                  "id": "KQI38",
                                  "name": "fixture2Opponent",
                                  "fill": "$text-primary",
                                  "content": "Manchester United vs Arsenal",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "qNr7V",
                              "name": "fixture2Venue",
                              "gap": 6,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "id": "w9RKO",
                                  "name": "venueIcon2",
                                  "fill": "$text-secondary",
                                  "width": 12,
                                  "height": 12
                                },
                                {
                                  "type": "text",
                                  "id": "tNJMH",
                                  "name": "venueText2",
                                  "fill": "$text-secondary",
                                  "content": "Emirates Stadium • Away",
                                  "fontFamily": "Inter",
                                  "fontSize": 11,
                                  "fontWeight": "normal"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "mu3Vg",
                      "name": "fixture3",
                      "width": "fill_container",
                      "fill": "$bg-card",
                      "cornerRadius": 12,
                      "gap": 16,
                      "padding": 20,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "rectangle",
                          "cornerRadius": 8,
                          "id": "gSKjQ",
                          "name": "fixture3Dot",
                          "fill": "$mu-gold",
                          "width": 16,
                          "height": 16
                        },
                        {
                          "type": "frame",
                          "id": "wIkEe",
                          "name": "fixture3Content",
                          "width": "fill_container",
                          "layout": "vertical",
                          "gap": 8,
                          "children": [
                            {
                              "type": "text",
                              "id": "QYYZH",
                              "name": "fixture3Date",
                              "fill": "$text-secondary",
                              "content": "07 Apr 2024 • 7:45 PM",
                              "fontFamily": "Inter",
                              "fontSize": 12,
                              "fontWeight": "normal"
                            },
                            {
                              "type": "frame",
                              "id": "cB2Ds",
                              "name": "fixture3Teams",
                              "width": "fill_container",
                              "gap": 12,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "frame",
                                  "id": "n04k9",
                                  "name": "fixture3Badge1",
                                  "fill": "$mu-red-primary",
                                  "cornerRadius": 4,
                                  "padding": [
                                    4,
                                    8
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "id": "wOEQb",
                                      "name": "fixture3BadgeText1",
                                      "fill": "$text-primary",
                                      "content": "UCL",
                                      "fontFamily": "Inter",
                                      "fontSize": 10,
                                      "fontWeight": "bold"
                                    }
                                  ]
                                },
                                {
                                  "type": "text",
                                  "id": "OhtYq",
                                  "name": "fixture3Opponent",
                                  "fill": "$text-primary",
                                  "content": "Manchester United vs Bayern Munich",
                                  "fontFamily": "Inter",
                                  "fontSize": 14,
                                  "fontWeight": "bold"
                                }
                              ]
                            },
                            {
                              "type": "frame",
                              "id": "gqpqF",
                              "name": "fixture3Venue",
                              "gap": 6,
                              "alignItems": "center",
                              "children": [
                                {
                                  "type": "rectangle",
                                  "id": "xyVqB",
                                  "name": "venueIcon3",
                                  "fill": "$text-secondary",
                                  "width": 12,
                                  "height": 12
                                },
                                {
                                  "type": "text",
                                  "id": "EWgUR",
                                  "name": "venueText3",
                                  "fill": "$text-secondary",
                                  "content": "Allianz Arena • Away",
                                  "fontFamily": "Inter",
                                  "fontSize": 11,
                                  "fontWeight": "normal"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "variables": {
    "bg-card": {
      "type": "color",
      "value": "#2A2A2A"
    },
    "bg-dark": {
      "type": "color",
      "value": "#1A1A1A"
    },
    "bg-sidebar": {
      "type": "color",
      "value": "#0E1117"
    },
    "error-red": {
      "type": "color",
      "value": "#EF4444"
    },
    "mu-gold": {
      "type": "color",
      "value": "#FFB81C"
    },
    "mu-red-primary": {
      "type": "color",
      "value": "#DA291C"
    },
    "mu-red-secondary": {
      "type": "color",
      "value": "#C1232B"
    },
    "success-green": {
      "type": "color",
      "value": "#10B981"
    },
    "text-primary": {
      "type": "color",
      "value": "#FFFFFF"
    },
    "text-secondary": {
      "type": "color",
      "value": "#B0B0B0"
    },
    "warning-orange": {
      "type": "color",
      "value": "#F59E0B"
    }
  }
}