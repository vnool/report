VERSION 5.00
Begin VB.Form RegMyKid 
   Caption         =   "报名"
   ClientHeight    =   3360
   ClientLeft      =   120
   ClientTop       =   450
   ClientWidth     =   5190
   Icon            =   "Form1.frx":0000
   LinkTopic       =   "Form1"
   ScaleHeight     =   3360
   ScaleWidth      =   5190
   StartUpPosition =   2  '屏幕中心
   Begin VB.CommandButton Command2 
      Caption         =   "停止"
      Height          =   615
      Left            =   3750
      TabIndex        =   6
      Top             =   600
      Width           =   540
   End
   Begin VB.TextBox Text2 
      BeginProperty Font 
         Name            =   "宋体"
         Size            =   12
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   420
      Left            =   450
      TabIndex        =   3
      Text            =   "1"
      Top             =   675
      Width           =   315
   End
   Begin VB.Timer Timer1 
      Enabled         =   0   'False
      Interval        =   1000
      Left            =   2325
      Top             =   -225
   End
   Begin VB.TextBox Text1 
      Height          =   690
      Left            =   4050
      MultiLine       =   -1  'True
      TabIndex        =   1
      Text            =   "Form1.frx":0CCA
      Top             =   975
      Visible         =   0   'False
      Width           =   1815
   End
   Begin VB.CommandButton Command1 
      Caption         =   "启动"
      Height          =   630
      Left            =   2400
      TabIndex        =   0
      Top             =   600
      Width           =   1350
   End
   Begin VB.Label Label4 
      Caption         =   "另外一个版本"
      Height          =   240
      Left            =   1650
      TabIndex        =   7
      Top             =   225
      Width           =   1590
   End
   Begin VB.Shape Shape1 
      BackStyle       =   1  'Opaque
      Height          =   330
      Left            =   450
      Top             =   1500
      Width           =   375
   End
   Begin VB.Label Label3 
      Height          =   840
      Left            =   525
      TabIndex        =   5
      Top             =   2100
      Width           =   4365
   End
   Begin VB.Label Label2 
      Caption         =   "秒提交一次"
      Height          =   465
      Left            =   825
      TabIndex        =   4
      Top             =   750
      Width           =   1215
   End
   Begin VB.Label Label1 
      Caption         =   "王子萱 报名"
      BeginProperty Font 
         Name            =   "微软雅黑"
         Size            =   14.25
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   420
      Left            =   900
      TabIndex        =   2
      Top             =   1470
      Width           =   3120
   End
End
Attribute VB_Name = "RegMyKid"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private Enum DataEnum
  ResponseText = 1
  ResponseBody = 2
End Enum

Dim TryCount
Private Sub Command1_Click()
   Timer1.Enabled = True
   Command1.Enabled = False
   TryCount = 0
End Sub
  Function PostData(StrUrl As String, StrData As String)
  On Error GoTo ERR:
  
  Label3 = ""
  
  Dim DataS As String
  Dim DataB() As Byte
  
  Dim XMLHTTP As Object
  Set XMLHTTP = CreateObject("Microsoft.XMLHTTP")
   'Set XMLHTTP = CreateObject("Msxml2.XMLHTTP")
  XMLHTTP.Open "POST", StrUrl, True
  XMLHTTP.setRequestHeader "Content-Length", Len(PostData)
  XMLHTTP.setRequestHeader "CONTENT-TYPE", "application/x-www-form-urlencoded"
  XMLHTTP.setRequestHeader "Host", "sxsklyey.ankang06.org"
  XMLHTTP.send (StrData)
  
  Do Until XMLHTTP.ReadyState = 4
    DoEvents
  Loop
  '-----------------------------函数返回
  Select Case DataEnum.ResponseText
  Case ResponseText
    '--------------------------------直接返回字符串
    DataS = XMLHTTP.ResponseText
    PostData = DataS
  Case ResponseBody
    '--------------------------------直接返回二进制
    DataB = XMLHTTP.ResponseBody
    PostData = DataB
  Case ResponseBody + ResponseText
    '---------------------------二进制转字符串[直接返回字串出现乱码时尝试]
    DataS = BytesToStr(XMLHTTP.ResponseBody)
    PostData = DataS
  Case Else
    '--------------------------------无效的返回
    PostData = ""
  End Select
  '------------------------------------释放空间
  Set XMLHTTP = Nothing
 
  Label3 = PostData
  Debug.Print PostData
  TryCount = TryCount + 1
  
  
  
 If (PostData = "1") Then
      MsgBox ("恭喜您,报名成功！")
     Call setSsuccess
 ElseIf PostData = "100" Then
     Label3 = ("非常抱歉,该园报名时间还没有开始!")
           
 ElseIf PostData = "1000" Then
    Label3 = "不一定是结束了 "
          
 Else
    Label3 = "报名失败！"
          
End If
   Label1 = "第" + CStr(TryCount) + "次尝试"
   
 
  Exit Function
ERR:
Label3 = ERR.Description

  PostData = ""
End Function

Sub setSsuccess()
   Timer1.Enabled = False
   Command1.Enabled = True
   
End Sub
Function BytesToStr(ByVal vIn) As String
  strReturn = ""
  For i = 1 To LenB(vIn)
    ThisCharCode = AscB(MidB(vIn, i, 1))
    If ThisCharCode < &H80 Then
      strReturn = strReturn & Chr(ThisCharCode)
    Else
      NextCharCode = AscB(MidB(vIn, i + 1, 1))
      strReturn = strReturn & Chr(CLng(ThisCharCode) * &H100 + CInt(NextCharCode))
      i = i + 1
    End If
  Next
  BytesToStr = strReturn
End Function

Private Sub Command2_Click()
    Call setSsuccess
End Sub

Private Sub Form_Unload(Cancel As Integer)
  End
End Sub

Private Sub Timer1_Timer()
   Dim Post$, Url$
   Url$ = "http://sxsklyey.ankang06.org/school/onlineapply/addOnlineapply/"
   '  Url$ = "http://localhost/report/kelly/test.php"
   Post$ = Replace(Replace(Text1.Text, vbLf, ""), vbCr, "")
   PostData Url$, Post$
   
   If Shape1.BackColor = &H80000005 Then
      Shape1.BackColor = RGB(10, 159, 10)
   Else
      Shape1.BackColor = &H80000005
   End If
End Sub
