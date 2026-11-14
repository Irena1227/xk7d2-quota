window.DASH_DATA = {
  "updatedAt": "2026-11-14T15:45:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 12.65,
    "feelsLikeC": 12,
    "humidity": 75,
    "windKph": 3.34,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-14T13:35:33+08:00",
    "fetchedAt": "2026-11-14T15:45:05+08:00",
    "error": null,
    "checkedAt": "2026-11-14T15:45:05+08:00",
    "lastSuccessAt": "2026-11-14T15:45:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 4.33,
      "currency": "CNY",
      "detail": "余额 ¥4.33",
      "fetchedAt": "2026-11-14T15:42:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-11-14T15:45:05+08:00",
      "lastSuccessAt": "2026-11-14T15:42:04+08:00",
      "stale": true,
      "lastAttemptAt": "2026-11-14T15:45:05+08:00"
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-11-14T11:12:01+08:00",
          "stale": true,
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T11:12:04+08:00"
        },
        {
          "name": "7天",
          "usedPct": 4,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T11:12:04+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T11:12:04+08:00"
        }
      ],
      "fetchedAt": "2026-11-14T11:12:00+08:00",
      "error": "HTTP 400 This organization has been disabled. An organization admin can appeal at https://console.anthropic.com/appeal (Reference: TS-01a1d80a-8015-7417-8b26-121032a5ca82)",
      "checkedAt": "2026-11-14T15:45:05+08:00",
      "lastSuccessAt": "2026-11-14T11:12:04+08:00",
      "stale": true,
      "lastAttemptAt": "2026-11-14T15:45:05+08:00"
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
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T15:45:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 30,
          "resetAt": "2026-11-18T15:20:40+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T15:45:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-14T15:45:00+08:00",
      "error": null,
      "checkedAt": "2026-11-14T15:45:05+08:00",
      "lastSuccessAt": "2026-11-14T15:45:05+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 14,
          "resetAt": "2026-11-14T18:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T15:45:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 3,
          "resetAt": "2026-11-20T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-14T15:45:05+08:00"
        },
        {
          "name": "月",
          "usedPct": 43.4,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-11-13T08:03:06+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-14T15:45:05+08:00",
          "lastSuccessAt": "2026-11-13T08:03:06+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-14T15:45:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-14T15:45:05+08:00",
      "lastSuccessAt": "2026-11-14T15:45:05+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-14T00:00:05+08:00",
        "checkedAt": "2026-11-14T15:45:05+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-13T08:03:06+08:00",
        "monthlyValue": 43.4,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-14T00:00:05+08:00",
        "lastNotificationAttemptAt": "2026-11-14T00:00:05+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "相知无远近，万里尚为邻。",
    "source": "张九龄《送韦城李少府》"
  }
};
