(function () {
  var LIVE = window.DASH_LIVE_ENDPOINT || '';
  var last = null;
  var rendered = '';
  var WD = ['周日','周一','周二','周三','周四','周五','周六'];

  function el(id) { return document.getElementById(id); }
  function txt(id, value) { var node = el(id); if (node) node.textContent = value; }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function stamp(value) { var n = Date.parse(value || ''); return isNaN(n) ? 0 : n; }
  function hhmm(value) { var d = new Date(value); return isNaN(d.getTime()) ? '--:--' : pad(d.getHours()) + ':' + pad(d.getMinutes()); }

  function clock() {
    var d = new Date();
    txt('dtTime', pad(d.getHours()) + ':' + pad(d.getMinutes()));
    txt('dtDate', d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日');
    txt('dtWeek', WD[d.getDay()]);
    heartbeat();
  }

  function battery() {
    var m = String(location.search || '').match(/[?&]battery=([0-9]{1,3})/);
    var pct = m ? Number(m[1]) : null;
    if (pct === null && window.KINDLE_DEVICE && typeof window.KINDLE_DEVICE.battery === 'number') pct = window.KINDLE_DEVICE.battery;
    if (pct === null) return;
    pct = Math.max(0, Math.min(100, pct));
    txt('batPct', pct + '%');
    var fill = el('batFill');
    if (fill) fill.setAttribute('width', Math.round(18 * pct / 100));
  }

  function heartbeat() {
    var age = last ? Math.floor((Date.now() - stamp(last.updatedAt)) / 60000) : 99999;
    var when = hhmm(last && last.updatedAt);
    var status = el('dataStatus');
    var alert = el('dataAlert');
    if (!last || age > 10) {
      if (status) { status.textContent = '离线 · 最后 ' + when; status.className = 'warn'; }
      if (alert) { alert.textContent = '电脑或数据链路已离线 · 最后在线 ' + when; alert.className = 'data-alert on'; }
    } else if (age >= 3) {
      if (status) { status.textContent = '延迟 ' + age + ' 分钟 · ' + when; status.className = 'warn'; }
      if (alert) { alert.textContent = '实时数据延迟 ' + age + ' 分钟 · 正在显示最后一次结果'; alert.className = 'data-alert on'; }
    } else {
      if (status) { status.textContent = '实时 · ' + when; status.className = ''; }
      if (alert) { alert.textContent = ''; alert.className = 'data-alert'; }
    }
  }

  function label(name) {
    name = String(name || '');
    if (/5小时|5H/i.test(name)) return '5H QUOTA';
    if (/7天|周|WEEK/i.test(name)) return 'WEEKLY';
    if (/月|MONTH/i.test(name)) return 'MONTHLY';
    return name || 'QUOTA';
  }

  function countdown(value) {
    var ms = stamp(value) - Date.now();
    if (!value || !ms) return '↻ 未提供刷新时间';
    if (ms <= 0) return '↻ 即将刷新';
    var mins = Math.ceil(ms / 60000);
    var days = Math.floor(mins / 1440);
    var hours = Math.floor((mins % 1440) / 60);
    mins = mins % 60;
    if (days) return '↻ ' + days + 'd' + (hours ? ' ' + hours + 'h' : '');
    if (hours) return '↻ ' + hours + 'h' + pad(mins) + 'm';
    return '↻ ' + mins + 'm';
  }

  function quota(cardId, source) {
    var card = el(cardId);
    if (!card) return;
    var rows = card.querySelectorAll('.q-row');
    var windows = source && source.ok && source.windows ? source.windows : [];
    var i, spans, bar, refresh;
    for (i = 0; i < rows.length; i++) {
      if (i >= windows.length) { rows[i].style.display = 'none'; continue; }
      rows[i].style.display = 'block';
      spans = rows[i].querySelectorAll('.q-label span');
      if (spans.length > 1) {
        spans[0].textContent = label(windows[i].name);
        spans[1].textContent = Math.round(Number(windows[i].usedPct) || 0) + '%';
      }
      bar = rows[i].querySelector('.q-bar-fill');
      if (bar) bar.style.width = Math.max(0, Math.min(100, Number(windows[i].usedPct) || 0)) + '%';
      refresh = rows[i].querySelector('.q-refresh');
      if (refresh) refresh.textContent = countdown(windows[i].resetAt);
    }
    if (!windows.length && rows.length) {
      rows[0].style.display = 'block';
      spans = rows[0].querySelectorAll('.q-label span');
      if (spans.length > 1) { spans[0].textContent = '获取失败'; spans[1].textContent = '--'; }
      bar = rows[0].querySelector('.q-bar-fill');
      if (bar) bar.style.width = '0%';
      refresh = rows[0].querySelector('.q-refresh');
      if (refresh) refresh.textContent = '↻ 等待下次采集';
    }
  }

  function weatherIcon(key, desc) {
    var v = (String(key || '') + ' ' + String(desc || '')).toLowerCase();
    if (/thunder|雷/.test(v)) return 'ϟ';
    if (/snow|雪/.test(v)) return '❄';
    if (/rain|wet|雨/.test(v)) return '☂';
    if (/fog|mist|haze|雾/.test(v)) return '≋';
    if (/clear|sun|晴/.test(v)) return '☀';
    return '☁';
  }

  function weather(w) {
    if (!w || !w.ok) return;
    txt('weatherTemp', Math.round(Number(w.tempC)) + '°');
    var icon = el('weatherIcon');
    if (icon) icon.innerHTML = '<span style="font-size:30px;line-height:1">' + weatherIcon(w.iconKey, w.description) + '</span>';
    var detail = el('weatherDetail');
    if (detail) detail.innerHTML = String(w.description || '天气') + ' · 体感 ' + Math.round(Number(w.feelsLikeC)) + '° · 湿度 ' + Math.round(Number(w.humidity)) + '%<br>风 ' + Math.round(Number(w.windKph)) + 'km/h · ' + String(w.place || '北京');
  }

  function deepseek(source) {
    if (source && source.ok && typeof source.balance === 'number') {
      txt('deepSeekBalance', '¥ ' + Number(source.balance).toFixed(2));
      txt('deepSeekDetail', '实时余额 · 按量计费');
    } else {
      txt('deepSeekBalance', '¥ --');
      txt('deepSeekDetail', '获取失败 · 等待下次采集');
    }
  }

  function render(data) {
    if (!data || !data.updatedAt || !data.sources) return;
    if (rendered && stamp(data.updatedAt) < stamp(rendered)) return;
    last = data;
    if (data.updatedAt !== rendered) {
      rendered = data.updatedAt;
      weather(data.weather);
      quota('cardClaude', data.sources.claude);
      quota('cardCodex', data.sources.codex);
      quota('cardKimi', data.sources.kimi);
      deepseek(data.sources.deepseek);
    }
    heartbeat();
  }

  function poll() {
    if (!LIVE || LIVE.indexOf('__LIVE_') === 0) return;
    var script = document.createElement('script');
    script.async = true;
    script.src = LIVE + (LIVE.indexOf('?') < 0 ? '?' : '&') + '_=' + Date.now();
    script.onload = function () { render(window.DASH_DATA); if (script.parentNode) script.parentNode.removeChild(script); };
    script.onerror = function () { if (script.parentNode) script.parentNode.removeChild(script); };
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  function schedulePoll() {
    var now = Date.now();
    var delay = (5000 - (now % 10000) + 10000) % 10000;
    if (delay < 250) delay += 10000;
    setTimeout(function () {
      poll();
      schedulePoll();
    }, delay);
  }

  render(window.DASH_DATA);
  clock();
  battery();
  poll();
  schedulePoll();
  setInterval(clock, 30000);
}());
