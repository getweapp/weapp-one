const host = 'https://api.getweapp.com/thirdparty/one'
const wxRequest = (params, url) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
      params.success && params.success(res)
      wx.hideToast()
    },
    fail: (res) => {
      params.fail && params.fail(res)
    },
    complete: (res) => {
      params.complete && params.complete(res)
    }
  })
}

// Index
const getVolById = (params) => wxRequest(params, host + '/api/hp/detail?id=' + params.query.id)
const getVolIdList = (params) => wxRequest(params, host + '/api/hp/idlist?id=0')
const getVolsByMonth = (params) => wxRequest(params, host + '/api/hp/bymonth/' + params.query.month)
const getVolDetailById = (params) => wxRequest(params, host + '/api/hp/detail/' + params.query.id)

// Reading
const getCarousel = (params) => wxRequest(params, host + '/api/reading/carousel')
const getLastArticles = (params) => wxRequest(params, host + '/api/reading/index')
const getEssayById = (params) => wxRequest(params, host + '/api/essay?id=' + params.query.id)
const getSerialById = (params) => wxRequest(params, host + '/api/serialcontent?id=' + params.query.id)
const getQuestionById = (params) => wxRequest(params, host + '/api/question?id=' + params.query.id)
const getArticlesByMonth = (params) => {
  wxRequest(params, host + '/api/' + params.query.type + '/bymonth/' + params.query.month)
}

// Music
const getMusicIdList = (params) => wxRequest(params, host + '/api/music/idlist?id=0')
const getMusicsByMonth = (params) => wxRequest(params, host + '/api/music/bymonth/' + params.query.month)
const getMusicDetailById = (params) => wxRequest(params, host + '/api/music/detail?id=' + params.query.id)

// Movie
const getMovieListById = (params) => wxRequest(params, host + '/api/movie/list?id=' + params.query.id)
const getMovieDetailById = (params) => wxRequest(params, host + '/api/movie/detail?id=' + params.query.id)
const getMovieStoryById = (params) => wxRequest(params, host + '/api/movie?id=' + params.query.id)

module.exports = {
  getVolById,
  getVolIdList,
  getVolsByMonth,
  getVolDetailById,
  getCarousel,
  getLastArticles,
  getEssayById,
  getSerialById,
  getQuestionById,
  getArticlesByMonth,
  getMusicIdList,
  getMusicsByMonth,
  getMusicDetailById,
  getMovieListById,
  getMovieDetailById,
  getMovieStoryById
}
