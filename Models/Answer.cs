using System;
using System.Text.Json.Serialization;

namespace SuncoastOverflow.Models
{
  public class Answer
  {
    public int Id { get; set; }
    public string Response { get; set; }
    public DateTime TimeSubmitted { get; set; }
    public string Author { get; set; }
    public int VoteCount { get; set; }
    public int QuestionId { get; set; }

    [JsonIgnore]
    public Question Question { get; set; }
  }
}