<<<<<<< HEAD
!function () {
    var model = {
        // 获取数据
        init: function () {
            var APP_ID = 'fICGXh1f61rlfh1Nm1fcPaHb-gzGzoHsz';
            var APP_KEY = 'm7cUoDEz8GOhedE0Lw8l44qc';
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find() // Promise 对象
        },
        // 创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({  // Promise 对象
                'name': name,
                'content': content
            })
        }
    }

    var view = document.querySelector('section.message')


    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                console.log(object)
            })
        }

    }

    controller.init(view, model)


}.call()
=======
var APP_ID = 'fICGXh1f61rlfh1Nm1fcPaHb-gzGzoHsz';
var APP_KEY = 'm7cUoDEz8GOhedE0Lw8l44qc';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var query = new AV.Query('Message');
query.find()
  .then(
    function (messages) {
      let array = messages.map((item)=> item.attributes )
      array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    } 
  )

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e){
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  let name = myForm.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'name': name,
    'content': content
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
    myForm.querySelector('input[name=content]').value = ''
    console.log(object)
  })
})

/*
// 创建 TestObject 表
var X = AV.Object.extend('Frank2');
// 在表中创建一行数据
var o = new X();
// 数据内容是 words: 'Hello World!' 保存
// 如果保存成功，则运行 alert('')
o.save({
  xxxxxxxxxx: 'Fuck World!'
}).then(function() {
  console.log(arguments[0])
})
*/
>>>>>>> parent of 8b5a24a... no message
