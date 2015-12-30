var Product = React.createClass({
  getInitialState() {
    return {
        value: null
    };
  },

  componentDidMount() {
    $('.ui.selection.dropdown').dropdown({
      dataType: 'jsonp',
      apiSettings   : {
        onResponse: function(githubResponse) {
          var
            response = {
              results : []
            }
          ;
          // translate github api response to work with dropdown
          $.each(githubResponse.items, function(index, item) {
            response.results.push({
              name: item.name,
              value: item.id
            });
          });
          return response;
        },
        url: '//api.github.com/search/repositories?q={query}'
      },
      onChange: (value) => {
        this.setState({
            value
        });
      }
    });
  },

  componentDidUpdate() {
    $('.ui.dropdown').dropdown('refresh');
  },

  render: function() {
    return (
      <form>
        <div className="ui form">
          <div className="field">
            <label>{ Lang.get('product.name') }</label>
            <input placeholder={Lang.get('product.name')} type="text" />
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.sku') }</label>
              <input placeholder={Lang.get('product.sku')} type="text" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.series') }</label>
              <input placeholder={Lang.get('product.series')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.brand') }</label>
              <input placeholder={Lang.get('product.brand')} type="text" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.unit') }</label>
              <input placeholder={Lang.get('product.unit')} type="text" />
            </div>
          </div>
          <div className="ui submit button">Submit</div>
        </div>
      </form>
    );
  }
});