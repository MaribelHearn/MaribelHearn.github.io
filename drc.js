var global = this, phantasm = true, GAME = "#game", DIFFICULTY = "#difficulty", CHALLENGE = "#challenge", MISSES = "#misses", SCORING = "#scoring",
    BOMBS = "#bombs", SCORE = "#score", PERFORMANCE = "#performance", DRCPOINTS = "#drcpoints", ERROR = "#error", SHOTTYPE = "#shottype",
    DIFF_OPTIONS = "<option>Easy</option>\n<option>Normal</option>\n<option>Hard</option>\n<option>Lunatic</option>\n<option>Extra</option>",
    SURV_OPTIONS = "<label for='misses'>Misses</label><input id='misses' type='number' value=0 min=0 max=100><br><label for='bombs'>Bombs</label><input id='bombs' type='number' value=0 min=0 max=100>",
    SCORE_OPTIONS = "<label for='score'>Score</label><input id='score' type='text'>",
    SURV_RUBRICS = {
        "SoEW": {
            "Easy": {
                "base": 30,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 80,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 120,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 250,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 100,
                "exp": 1.1,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuC": 1.05
            }
        },
        "LLS": {
            "Easy": {
                "base": 40,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Hard": {
                "base": 140,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 280,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Extra": {
                "base": 90,
                "exp": 1.07,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "shots": {
                "ReimuB": 1.05,
                "MarisaB": 1.05
            }
        },
        "MS": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 100,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "Reimu": 1.05,
                "Marisa": 1.05,
                "Yuuka": 1.1
            }
        },
        "EoSD": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 320,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuA": 1.1,
                "MarisaA": 1.05
            }
        },
        "PCB": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Phantasm": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuA": 1.05,
                "MarisaB": 1.05,
                "SakuyaA": 1.05,
                "SakuyaB": 1.05
            }
        },
        "IN": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 305,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 115,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "MagicTeam": 1.05,
                "ScarletTeam": 1.05,
                "Reimu": 1.1,
                "Marisa": 1.05,
                "Alice": 1.2,
                "Sakuya": 1.2,
                "Remilia": 1.05,
                "Yuyuko": 1.05
            }
        },
        "MoF": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 105,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuC": 1.15,
                "MarisaA": 1.15
            }
        },
        "SA": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 110,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.05,
                "ReimuC": 1.1,
                "MarisaA": 1.05,
                "MarisaC": 1.15
            }
        },
        "UFO": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 160,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 320,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.05,
                "MarisaA": 1.05,
                "MarisaB": 1.15,
                "SanaeA": 1.05
            }
        },
        "GFW": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 130,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 260,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Extra": {
                "base": 130,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {}
        },
        "TD": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 140,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 280,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "Sanae": 1.1
            }
        },
        "DDC": {
            "Easy": {
                "base": 50,
                "exp": 1.07,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.05,
                "MarisaA": 1.2,
                "MarisaB": 1.05,
                "SakuyaB": 1.15
            }
        },
        "LoLK": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 120,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 160,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 330,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 130,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "Marisa": 1.15,
                "Sanae": 1.05,
                "Reisen": 1.05
            }
        }
    },
    SCORE_RUBRICS = {
        "HRtP": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 325,
                "exp": 4
            },
            "Hard": {
                "base": 375,
                "exp": 3
            },
            "Lunatic": {
                "base": 400,
                "exp": 3
            }
        },
        "SoEW": {
            "Easy": {
                "base": 275,
                "exp": 4
            },
            "Normal": {
                "base": 300,
                "exp": 4
            },
            "Hard": {
                "base": 350,
                "exp": 3
            },
            "Lunatic": {
                "base": 375,
                "exp": 2
            },
            "Extra": {
                "base": 325,
                "exp": 3
            }
        },
        "PoDD": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 350,
                "exp": 3
            },
            "Hard": {
                "base": 400,
                "exp": 3
            },
            "Lunatic": {
                "base": 450,
                "exp": 2
            }
        },
        "LLS": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 350,
                "exp": 3
            },
            "Hard": {
                "base": 375,
                "exp": 3
            },
            "Lunatic": {
                "base": 400,
                "exp": 2.5
            },
            "Extra": {
                "base": 350,
                "exp": 5
            }
        },
        "MS": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 350,
                "exp": 3
            },
            "Hard": {
                "base": 400,
                "exp": 3
            },
            "Lunatic": {
                "base": 425,
                "exp": 2
            },
            "Extra": {
                "base": 375,
                "exp": 3
            }
        },
        "EoSD": {
            "Easy": {
                "base": 350,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "PCB": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            },
            "Phantasm": {
                "base": 450,
                "exp": 2.5
            }
        },
        "IN": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "PoFV": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "SA": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "UFO": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "GFW": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "TD": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "DDC": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "LoLK": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        }
    };

$(document).ready(function() {
    checkGame($(GAME).val());
    checkChallenge($(CHALLENGE).val());
});

function checkGame(game) {
    var challenge = $(CHALLENGE).val();
    
    if (game == "PCB") {
        $(DIFFICULTY).append("<option>Phantasm</option>");
        phantasm = true;
    } else if (phantasm) {
        $(DIFFICULTY).html(DIFF_OPTIONS);
        phantasm = false;
    }
    
    checkShottypes();
}

function checkChallenge(challenge) {
    if (challenge == "Survival") {
        $(PERFORMANCE).html(SURV_OPTIONS);
    } else {
        $(PERFORMANCE).html(SCORE_OPTIONS);
        checkShottypes();
    }
}

function checkShottypes() {
    var game = $(GAME).val(), difficulty = $(DIFFICULTY).val(), shottypes = Object.keys(WRs[game][difficulty]), shottypeList = "";
    
    for (var i in shottypes) {
        var shottype = (shottypes[i].indexOf("Team") > -1 ? shottypes[i].replace("Team", " Team") : shottypes[i]);
        
        shottypeList += "<option value='" + shottypes[i] + "'>" + shottype + "</option>";
    }
    
    if (game == "GFW" && difficulty == "Extra") {
        $(SHOTTYPE).html("<option value='-'>-</option>");
    } else {
        $(SHOTTYPE).html(shottypeList);
    }
}

function drcPoints() {
    var game = $(GAME).val(), difficulty = $(DIFFICULTY).val(), challenge = $(CHALLENGE).val(), shottype = $(SHOTTYPE).val(), rubric, points;
    
    if (challenge == "Survival") {
        rubric = SURV_RUBRICS[game][difficulty];
        shottypeMultiplier = (SURV_RUBRICS[game].multiplier[shottype] ? SURV_RUBRICS[game].multiplier[shottype] : 1);
        points = survivalPoints(rubric, difficulty, shottypeMultiplier);
    } else {
        rubric = (game != "MoF" ? SCORE_RUBRICS[game][difficulty] : undefined);
        points = scoringPoints(rubric, game, difficulty, shottype);
    }
    
    $(DRCPOINTS).html("Your DRC points for this run: <b>" + points + "</b>!");
}

function survivalPoints(rubric, difficulty, shottypeMultiplier) {
    var misses = Number($(MISSES).val()), bombs = Number($(BOMBS).val()), n = 0;
    
    $(ERROR).html("");
    
    n += misses * rubric.miss;
    
    if (bombs >= 1) {
        n += rubric.firstBomb;
        bombs -= 1;
    }
    
    n += bombs * rubric.bomb;
    
    drcpoints = Math.round(rubric.base * Math.pow(rubric.exp, -n));
    
    return (difficulty == "Extra" ? drcpoints : Math.round(drcpoints * shottypeMultiplier));
}

function mofFormula(score) {
    var originalScore = score, drcpoints = 15;
    
    if (score < 1500000000) {
        while (score >= 30000000) {
            score -= 30000000;
            drcpoints += 2;
        }
        
        return drcpoints;
    }
    
    score = originalScore - 1500000000;
    drcpoints = 115;
    
    if (originalScore < 2000000000) {
        while (score >= 50000000) {
            score -= 50000000;
            drcpoints += 10;
        }
        
        return drcpoints;
    }
    
    score = originalScore - 2000000000;
    drcpoints = 215;
    
    if (originalScore < 2050000000) {
        while (score >= 10000000) {
            score -= 10000000;
            drcpoints += 5;
        }
        
        return drcpoints;
    }
    
    score = originalScore - 2050000000;
    drcpoints = 240;
    
    if (originalScore < 2100000000) {
        while (score >= 10000000) {
            score -= 10000000;
            drcpoints += 10;
        }
        
        return drcpoints;
    }
    
    score = originalScore - 2100000000;
    drcpoints = 290;
    
    while (score >= 10000000) {
        score -= 10000000;
        drcpoints += 15;
    }
    
    return drcpoints;
}

function scoringPoints(rubric, game, difficulty, shottype) {
    var score = Number($(SCORE).val().replace(/,/g, "").replace(/\./g, "").replace(/ /g, "")), wr;
    
    if (isNaN(score)) {
        $(ERROR).html("<b style='color:red'>Invalid score.</b>");
    } else {
        $(ERROR).html("");
    }
    
    if (game == "MoF") {
        return mofFormula(score);
    } else if (game == "SoEW" && difficulty == "Hard") {
        wr = WRs[game][difficulty]["ReimuB"][0];
    } else if (game == "SoEW" && difficulty == "Lunatic") {
        wr = WRs[game][difficulty]["ReimuA"][0];
    } else if (game == "LLS") {
        wr = WRs[game][difficulty];
        
        if (difficulty == "Easy" || difficulty == "Normal") {
            wr = wr["ReimuB"][0];
        } else if (difficulty == "Hard") {
            wr = wr["ReimuA"][0];
        } else if (difficulty == "Lunatic" || difficulty == "Extra") {
            wr = wr["MarisaA"][0];
        }
    } else {
        wr = WRs[game][difficulty][shottype][0];
    }
    
    return Math.round(rubric.base * Math.pow((score / wr), rubric.exp));
}