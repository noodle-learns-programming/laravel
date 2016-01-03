var BackboneModelMixin = {
  componentDidMount: function() {
    this.getBackboneModels().forEach(function(model) {
      model.on('add change remove', this.forceUpdate.bind(this, null), this);
    }, this);
  },

  componentWillUnmount: function() {
    this.getBackboneModels().forEach(function(model) {
      model.off(null, null, this);
    }, this);
  }
};

var FileUploadMixin = {
  _filename : null,
  _handleUploadType : null,
  _path : null,
  setHandleUploadType(type){
    this._handleUploadType = type;
  },
  getUploadFilename(fullpath){
    if( fullpath ){
      return this._path + '/' + this._filename;
    }
    return this._filename;
  },
  handleUploadFile(e) {
    var fd    = new FormData();
    fd.append('file', e.currentTarget.files[0]);
    fd.append('type', this._handleUploadType);
    $.ajax({
      url : '/api/upload',
      data: fd,
      processData: false,
      contentType: false,
      enctype: 'multipart/form-data',
      type: 'POST',
      success: function(res){
        this._path = res.path;
        this._filename = res.filename;
      }.bind(this)
    });
  }
};

exports.FileUploadMixin = FileUploadMixin;
exports.BackboneModelMixin = BackboneModelMixin;