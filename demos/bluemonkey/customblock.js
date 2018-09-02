
//运动
Blockly.defineBlocksWithJsonArray([
  {
  "type":"action0",
  "message0": "开始运动",
  "nextStatement": null,
  "colour": "#ff658f",
  "undelete":true
},
{
  "type":"action1",
  "message0": "%1 运动 %2 速度 %3 时长 %4",
  "args0": [
    {
      "type":"field_image",
      "src":"http://www.myjscode.com/images/photo.jpg",
      "width":30,
      "height":30
    },
    {
      "type": "field_dropdown",
      "name": "D",
      "options": [
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
      ]
    },
    {"type": "field_number","name":"S","value":"100","check": "Number"},
    {"type": "field_number","name":"C","value":"10","check": "Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2fdacc"
},
{
  "type":"action2",
  "message0": "%1 方向 %2 速度 %3 时长 %4",
  "args0": [
    {
        "type": "field_colour",
        "name": "COLOUR",
        "colour": "#ff0000"
    },
    {
      "type": "field_dropdown",
      "name": "D",
      "options": [
        ["顺时针", "turnShun"],
        ["逆时针", "turnNi"],
      ]
    },
    {"type": "field_number","name":"S","value":"100"},
    {"type": "field_number","name":"C","value":"10"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2fdacc"
},
{
  "type":"action3",
  "message0": "运动 %1 速度 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "D",
      "options": [
        ["向前", "turnForward-runForward"],
        ["向后", "turnBack-runBack"],
      ]
    },
    {"type": "field_number","name":"S","value":"100"},
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2fdacc"
},
{
  "type":"action4",
  "message0": "方向 %1 速度 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "D",
      "options": [
        ["左转", "turnLeft-runLeft"],
        ["右转", "turnRight-runRight"],
      ]
    },
    {"type": "field_number","name":"S","value":"100"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2fdacc"
},
{
  "type":"action5",
  "message0": "停止运动",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2fdacc"
}
]) ;

//展示
Blockly.defineBlocksWithJsonArray([{
  "type":"show1",
  "message0": "笑脸",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#ff658f"
},
{
  "type":"show2",
  "message0": "沮丧",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#ff658f"
},
{
  "type":"show3",
  "message0": "彩色灯红色",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#ff658f"
}]);

//控制
Blockly.defineBlocksWithJsonArray([{
  "type":"control1",
  "message0": "等待 %1 秒",
  "args0": [
    {"type": "field_number","name":"S","value":"10"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#04b3ff"
},
{
    "type": "controls_whileUntil",
    "message0": "重复 %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["当", "WHILE"],
          ["直到", "UNTIL"]
        ]
      },
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04b3ff",
    "helpUrl": "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    "extensions": ["controls_whileUntil_tooltip"]
  },
  {
    "type": "logic_boolean",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "BOOL",
        "options": [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
        ]
      }
    ],
    "output": "Boolean",
    "colour": "#04b3ff",
    "tooltip": "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_BOOLEAN_HELPURL}"
  },
  {
    "type": "controls_if",
    "message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04b3ff",
    "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
    "extensions": ["controls_if_tooltip"]
  },
  {
    "type": "controls_ifelse",
    "message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO0"
      }
    ],
    "message2": "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    "args2": [
      {
        "type": "input_statement",
        "name": "ELSE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#04b3ff",
    "tooltip": "%{BKYCONTROLS_IF_TOOLTIP_2}",
    "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
    "extensions": ["controls_if_tooltip"]
  }
]);

Blockly.JavaScript['action0'] = function(block) {
  var code = 'start();';
  return code;
};


Blockly.JavaScript['action1'] = function(block) {
  var D = block.getFieldValue('D');
  var S = Number(block.getFieldValue('S'));
  var C = Number(block.getFieldValue('C'));
  var code = 'action("'+D.split("-")[0]+'");waitForSeconds(1);action("'+D.split("-")[1]+'-'+S+'");action("duration-'+C+'");waitForSeconds(' + C + ');action("stopRun");';
  return code;
};

Blockly.JavaScript['action2'] = function(block) {
  console.log(block) ; 
  console.log(block.getFieldValue('COLOUR')) ;
  var D = block.getFieldValue('D');
  var S = Number(block.getFieldValue('S'));
  var C = Number(block.getFieldValue('C'));
  var code = 'action("'+D+'-'+S+'"); waitForSeconds(' + C + ');action("stopInRun");';
  return code;
};

Blockly.JavaScript['action3'] = function(block) {
  var D = block.getFieldValue('D');
  var S = Number(block.getFieldValue('S'));
  var code = 'action("'+D.split("-")[0]+'");waitForSeconds(1);action("'+D.split("-")[1]+'-'+S+'");';
  return code;
};
Blockly.JavaScript['action4'] = function(block) {
  var D = block.getFieldValue('D');
  var S = Number(block.getFieldValue('S'));
  var code = 'action("'+D.split("-")[0]+'");waitForSeconds(1);action("'+D.split("-")[1]+'-'+S+'");';
  return code;
};
Blockly.JavaScript['action5'] = function(block) {
  var code = 'action("stopRun");';
  return code;
};
Blockly.JavaScript['show1'] = function(block) {
  var code = 'alerts("笑脸");';
  return code;
};
Blockly.JavaScript['show2'] = function(block) {
  var code = 'alerts("沮丧");';
  return code;
};
Blockly.JavaScript['show3'] = function(block) {
  var code = 'alerts("彩色灯红色");';
  return code;
};
Blockly.JavaScript['control1'] = function(block) {
  var seconds = Number(block.getFieldValue('S'));
  var code = 'waitForSeconds(' + seconds + ');';
  return code;
};

/**
 * Register the interpreter asynchronous function
 * <code>waitForSeconds()</code>.
 */
function initInterpreterWaitForSeconds(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('waitForSeconds');

  var wrapper = interpreter.createAsyncFunction(
    function(timeInSeconds, callback) {
      // Delay the call to the callback.
      setTimeout(callback, timeInSeconds * 1000);
    });
  interpreter.setProperty(scope, 'waitForSeconds', wrapper);
}