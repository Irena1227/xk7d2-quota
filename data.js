window.DASH_DATA = {
  "updatedAt": "2026-10-16T07:54:01+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "阴",
    "iconKey": "overcast",
    "tempC": 13.85,
    "feelsLikeC": 13,
    "humidity": 67,
    "windKph": 16.848,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-16T07:53:18+08:00",
    "fetchedAt": "2026-10-16T07:54:01+08:00",
    "error": null,
    "checkedAt": "2026-10-16T07:54:01+08:00",
    "lastSuccessAt": "2026-10-16T07:54:01+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.58,
      "currency": "CNY",
      "detail": "余额 ¥10.58",
      "fetchedAt": "2026-10-16T07:54:00+08:00",
      "error": null,
      "checkedAt": "2026-10-16T07:54:01+08:00",
      "lastSuccessAt": "2026-10-16T07:54:01+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 21,
          "resetAt": "2026-10-14T13:39:59+08:00",
          "stale": true,
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        },
        {
          "name": "7天",
          "usedPct": 27,
          "resetAt": "2026-10-15T19:59:59+08:00",
          "stale": true,
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-15T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        }
      ],
      "fetchedAt": "2026-10-14T11:15:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-16T07:54:01+08:00",
      "lastSuccessAt": "2026-10-14T11:15:02+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-16T07:54:01+08:00"
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
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-16T07:54:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 12,
          "resetAt": "2026-10-22T14:48:45+08:00",
          "stale": false,
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-16T07:54:01+08:00"
        }
      ],
      "fetchedAt": "2026-10-16T07:54:00+08:00",
      "error": null,
      "checkedAt": "2026-10-16T07:54:01+08:00",
      "lastSuccessAt": "2026-10-16T07:54:01+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-10-16T09:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-16T07:54:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 5,
          "resetAt": "2026-10-16T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-16T07:54:01+08:00"
        },
        {
          "name": "月",
          "usedPct": 76,
          "resetAt": "2026-10-15T00:00:00+08:00",
          "observedAt": "2026-10-14T08:00:05+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-10-16T07:54:01+08:00",
          "lastSuccessAt": "2026-10-14T08:00:05+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-10-16T07:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-10-16T07:54:01+08:00",
      "lastSuccessAt": "2026-10-16T07:54:01+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-10-15T00:00:02+08:00",
        "checkedAt": "2026-10-16T07:54:01+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-14T08:00:05+08:00",
        "monthlyValue": 76,
        "monthlyResetAt": "2026-10-15T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-10-15T00:00:02+08:00",
        "lastNotificationAttemptAt": "2026-10-15T00:00:02+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "一年好景君须记，最是橙黄橘绿时。",
    "source": "苏轼《赠刘景文》"
  }
};
