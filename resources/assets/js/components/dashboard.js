module.exports = React.createClass({
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
            <div>
                <div>
                    <h2>Dashboard page</h2>
                </div>
            </div>
        );
    }
});