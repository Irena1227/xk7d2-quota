window.DASH_DATA = {
  "updatedAt": "2026-11-17T22:54:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 4.45,
    "feelsLikeC": 2.2,
    "humidity": 76,
    "windKph": 5.58,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-17T22:07:34+08:00",
    "fetchedAt": "2026-11-17T22:54:05+08:00",
    "error": null,
    "checkedAt": "2026-11-17T22:54:05+08:00",
    "lastSuccessAt": "2026-11-17T22:54:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 3.86,
      "currency": "CNY",
      "detail": "余额 ¥3.86",
      "fetchedAt": "2026-11-17T22:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-17T22:54:05+08:00",
      "lastSuccessAt": "2026-11-17T22:54:05+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-11-17T22:54:01+08:00",
          "stale": false,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T22:54:05+08:00"
        },
        {
          "name": "7天",
          "usedPct": 54,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T22:54:05+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T16:00:04+08:00"
        }
      ],
      "fetchedAt": "2026-11-17T22:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-17T22:54:05+08:00",
      "lastSuccessAt": "2026-11-17T22:54:05+08:00",
      "stale": false,
      "partialStale": true
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": null,
          "detailText": "↻ -",
          "stale": false,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T22:54:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 49,
          "resetAt": "2026-11-18T15:20:40+08:00",
          "stale": false,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T22:54:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-17T22:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-17T22:54:05+08:00",
      "lastSuccessAt": "2026-11-17T22:54:05+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 6,
          "resetAt": "2026-11-18T02:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T22:54:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 32,
          "resetAt": "2026-11-20T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-17T22:54:05+08:00"
        },
        {
          "name": "月",
          "usedPct": 2.3,
          "resetAt": "2026-12-14T00:00:00+08:00",
          "observedAt": "2026-11-15T08:03:06+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-17T22:54:05+08:00",
          "lastSuccessAt": "2026-11-15T08:03:06+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-17T22:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-17T22:54:05+08:00",
      "lastSuccessAt": "2026-11-17T22:54:05+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-16T08:00:07+08:00",
        "checkedAt": "2026-11-17T22:54:05+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-15T08:03:06+08:00",
        "monthlyValue": 2.3,
        "monthlyResetAt": "2026-12-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-16T08:00:07+08:00",
        "lastNotificationAttemptAt": "2026-11-16T08:00:07+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "骐骥一跃，不能十步；驽马十驾，功在不舍。",
    "source": "荀子《劝学》"
  }
};
