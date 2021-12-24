const panel = {
    type:'info',
    text:'',
    autoclose:false,
    success:function(text, autoclose = false){
       this.type = 'success';
       this.text = text;
       this.autoclose = autoclose;
       this.showPanel();
    },
    info:function(text, autoclose = false){
       this.type = 'info';
       this.text = text;
       this.autoclose = autoclose;
       this.showPanel();
    },
    warning:function(text, autoclose = false){
        this.type = 'warning';
        this.text = text;
        this.autoclose = autoclose;
        this.showPanel();
     },
     danger:function(text,autoclose = false){
        this.type = 'danger';
        this.text = text;
        this.autoclose = autoclose;
        this.showPanel();
     },
    showPanel:function(){
        let html = `
        <div class="${this.type}" id="panel">
            <p>${this.text}</p>
            ${this.autoclose===false?`<button type="button" onclick="panel.closePanel()">&times</button>`:''}
        </div>`;
        if(document.getElementById("panel")!==null){
            this.closePanel();
        }
        document.querySelector("body").insertAdjacentHTML('afterbegin', html);
        if(this.autoclose){
            setTimeout(()=>{
                this.closePanel();
            }, 3000);
        }
    },
    closePanel(){
        document.getElementById("panel").remove();
    }
};